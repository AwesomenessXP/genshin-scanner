import APIKEY from "../apiKey.js";
import { dmgStats  } from '../artifacts/processText/dmgStats.js';
import { regexStats,  } from '../artifacts/processText/regexStats.js';
import { customErrorMsg } from "../DOM/errorMsg.js";

export const artifactPiece = (SCREENSHOT) => {
  const outputTag = document.getElementById('output');
  const reqURL = `https://api.ocr.space/parse/image`;

  // GET the data from OCR API
  // use fetch api to request data
  const extractText = async () => {
    try {
      let requestOptions = metadata(SCREENSHOT);
      const response = await fetch(reqURL, requestOptions)
      const genshinData = await response.json();
      if (genshinData.ParsedResults[0].ParsedText === '' || genshinData.IsErroredOnProcessing) {
        throw "Unable to process image!";
      }

      // only output the stats if the element is empty
      if (!outputTag.firstChild) {
        populateHTML(genshinData, dmgStats);
      }
      console.log(genshinData);
    } catch (error) {
      console.log(error);
      customErrorMsg("Unable to scan");
    } // catch()
  } // artifactPiece()

  return {
    extractText,
    dmgStats,
  };
};

function metadata(SCREENSHOT) {
  let myHeaders = new Headers();
  myHeaders.append("apikey", `${APIKEY}`);

  let formdata = new FormData();
  formdata.append("language", "eng");
  formdata.append("base64Image", `${SCREENSHOT}`);
  formdata.append("OCREngine", 2);

  let requestOptions = { // send this to the API
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  return requestOptions;
}

/**
 * args: (parsed text obj), (obj w/artifact data)
 * populates the HTML, catch error if no text
 */
const populateHTML = async (scannedTextObj, dmgStats) => {
	try {
		const scannedText = await scannedTextObj.ParsedResults[0].ParsedText;
		const artifacts = await scannedText.split("\n");
			for (let item = 0; item < artifacts.length; item++) {
				renderElements(artifacts, item, dmgStats); // pass in parsed text, body of HTML, element (ex: ATK+14), and dmgStats object
			} // for
	} catch (error) {
		error = "ERROR: unable to render data!";
		customErrorMsg(error);
	}
} // populateHTML()

// render a new <p> element
/**
 * args: (array of parsed text), (body query selector), (string from array), (obj)
 * appends new elements to the screen
 */
const renderElements = async (artifacts, item, dmgStats) => {
	const newPara = document.createElement("p");
	const outputTag = document.getElementById('output');
	newPara.className = "output";
	const regex = new RegExp("^ATK$"); // expand on this later, include other main stats
	if (artifacts[item].match(regex)) { // if this is a main stat
		dmgStats.mainStats.ATK = artifacts[item + 1];
		newPara.textContent = `Main stat: ${artifacts[item]}: ${artifacts[item + 1]}`;
	} // if
	else { // if this is a substat
		if (validateDmgStats(artifacts[item], dmgStats)) {
			newPara.textContent = `${artifacts[item]}`; // if valid, display content
		}
	} // else
	outputTag.appendChild(newPara);
} // renderElements()

// Validate the text that was parsed
/**
 * args: (string from array of parsed text), (obj w/ artifact data) 
 * returns: true if valid, else false
 */
function validateDmgStats(stat, dmgStats) {
  const artifacts = new Map().set("Gladiator's Destiny", "Emblem"); // TODO: WILL USE LATER!!
  if (regexStats().em.test(stat)) { // if flat stat
    dmgStats.subStats.elemMastery = stat.replace('Elemental Mastery+', "");
    return true;
  }// if
  else if (regexStats().flatATK.test(stat)) { // if flat stat
    dmgStats.subStats.atk = stat.replace('ATK+', '');
    return true;
  }// else if
  // if stat is a percentage:
  else if (regexStats().critRate.test(stat) ||
          regexStats().critDmg.test(stat) ||
          regexStats().atkPcnt.test(stat)) {
    extractNumber(stat, dmgStats);
    return true;
  }// if
  return false;
} // validatedmgStats()

// removes 'CRIT RATE' or 'CRIT DMG' or 'ATK' from the string
/**
 * args: (string from parsed text array), (obj w/artifact data)
 * removes strings around the numbers, then saves the numbers in dmgStats object
 */
const extractNumber = (stat, dmgStats) => {
  if (regexStats().critRate.test(stat)) {
    dmgStats.subStats.critRate = stat.replace('CRIT Rate+', "")
      .replace('%', '');
  }

  if (regexStats().critDmg.test(stat)) {
    dmgStats.subStats.critDmg = stat.replace('CRIT DMG+', "")
    .replace('%', '');
  }

  if (regexStats().atkPcnt.test(stat)) {
    dmgStats.subStats.atkPercent = stat.replace('ATK+', "")
    .replace('%', '');
  }
} // extractNum()