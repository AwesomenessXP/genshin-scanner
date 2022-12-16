import APIKEY from "../apiKey.js";
import { dmgStats } from '../artifacts/processText/dmgStats.js';
import { regexStats } from '../artifacts/processText/regexStats.js';
import { customErrorMsg } from "../DOM/errorMsg.js";
import { outputTag, renderOutput } from "../DOM/renderUI.js";

const {
  regexFlatATK,
  regexAtkPcnt,
  regexCritDmg,
  regexCritRate,
  regexEm
} = regexStats;

// expand on this later, include other main stats
const mainStats = [{ 
  stat: /^ATK$/
}];

const subStats = dmgStats.subStats;
const mainStat = dmgStats.mainStats;

// TODO: WILL USE LATER!!
const artifacts = new Map().set(
  "Gladiator's Destiny",
  "Emblem"
); 

export const artifactPiece = () => {
  return {
    extractText,
    dmgStats,
  };
};

// GET the data from OCR API
// use fetch api to request data

async function extractText (SCREENSHOT) {
  const reqURL = `https://api.ocr.space/parse/image`;
  try {
    const genshinData = await fetchAPI(SCREENSHOT, reqURL);
    if (!outputTag.firstChild) {
      populateHTML(genshinData);
    }
  } catch (error) {
    customErrorMsg(error);
  }

} // artifactPiece()

const parsedText = (genshinData) => {
  return genshinData.ParsedResults[0].ParsedText;
}

const isError = (genshinData) => {
  return genshinData.IsErroredOnProcessing;
}

async function fetchAPI(SCREENSHOT, reqURL) {
  const requestOptions = metadata(SCREENSHOT);
  const response = await fetch(reqURL, requestOptions);
  const genshinData = await response.json();
  if (parsedText(genshinData) === ''|| isError(genshinData)) {
    throw "Unable to process image!";
  }
  return genshinData;
}

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
function readStats(artifacts) {
  let itemCount = 0;
  artifacts.forEach(item => {
    if (itemCount < artifacts.length - 1) {
      renderElements(item, artifacts[itemCount + 1]);
    }
    itemCount++;
  });
}

async function populateHTML(genshinData) {
	try {
		const scannedText = await parsedText(genshinData);
		const artifacts = await scannedText.split("\n");
    readStats(artifacts);
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
const foundMainStat = (mainStats, item) => {
  return mainStats.find(mainStat => {
    return item.match(mainStat.stat)
  });
};

async function renderElements(item, itemValue) {
  const output = renderOutput();
  let newPara = output.newPara;
  let outputTag = output.outputTag;

	if (foundMainStat(mainStats, item) != undefined) { // if this is a main stat
		mainStat.ATK = itemValue;
		newPara.textContent = `Main stat: ${item}: ${itemValue}`;
	} // if
	else if (validateDmgStats(item)) { // if valid, display content
    newPara.textContent = `${item}`; 
	} // else
	outputTag.appendChild(newPara);
} // renderElements()

// Validate the text that was parsed
/**
 * args: (string from array of parsed text), (obj w/ artifact data) 
 * returns: true if valid, else false
 */
function validateDmgStats(stat) {
  if (regexEm.test(stat)) { // if flat stat
    subStats.elemMastery = stat.replace('Elemental Mastery+', "");
    return true;
  }// if
  else if (regexFlatATK.test(stat)) { // if flat stat
    subStats.atk = stat.replace('ATK+', '');
    return true;
  }// else if
  else {
    return extractNumber(stat);
  }//
} // validatedmgStats()

// removes 'CRIT RATE' or 'CRIT DMG' or 'ATK' from the string
/**
 * args: (string from parsed text array), (obj w/artifact data)
 * removes strings around the numbers, then saves the numbers 
 * in dmgStats object
 */
function extractNumber (stat) {
  if (regexCritRate.test(stat)) {
    subStats.critRate = stat.replace('CRIT Rate+', "")
      .replace('%', '');
    return true;
  }

  if (regexCritDmg.test(stat)) {
    subStats.critDmg = stat.replace('CRIT DMG+', "")
      .replace('%', '');
    return true;
  }

  if (regexAtkPcnt.test(stat)) {
    subStats.atkPercent = stat.replace('ATK+', "")
      .replace('%', '');
    return true;
  }
  return false;
} // extractNum()