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

async function extractText (screenS) {
  const reqURL = `https://api.ocr.space/parse/image`;
  try {
    const genshinData = await fetchAPI(screenS, reqURL);
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

async function fetchAPI(screenS, reqURL) {
  const reqOptions = metadata(screenS);
  const res = await fetch(reqURL, reqOptions);
  const genData = await res.json();
  if (parsedText(genData) === ''|| isError(genData)) {
    throw "Unable to process image!";
  }
  return genData;
}

function metadata(screenS) {
  let myHeaders = new Headers();
  myHeaders.append("apikey", `${APIKEY}`);

  let form = new FormData();
  form.append("language", "eng");
  form.append("base64Image", `${screenS}`);
  form.append("OCREngine", 2);

  let requestOptions = { // send this to the API
    method: 'POST',
    headers: myHeaders,
    body: form,
    redirect: 'follow'
  };

  return requestOptions;
}

/**
 * args: (parsed text obj), (obj w/artifact data)
 * populates the HTML, catch error if no text
 */
function readStats(artifct) {
  let itemCount = 0;
  artifct.forEach(item => {
    if (itemCount < artifct.length - 1) {
      renderElements(item, artifct[itemCount + 1]);
    }
    itemCount++;
  });
}

async function populateHTML(genData) {
	try {
		const scannedText = await parsedText(genData);
		const artifacts = await scannedText.split("\n");
    readStats(artifacts);
	} catch (error) {
		customErrorMsg(error);
	}
} // populateHTML()

// render a new <p> element
/**
 * args: (array of parsed text), (body query selector), (string from array), (obj)
 * appends new elements to the screen
 */
const fndMainStat = (mainStats, item) => {
  return mainStats.find(mainStat => {
    return item.match(mainStat.stat)
  });
};

async function renderElements(item, itemVal) {
  const output = renderOutput();
  let newPara = output.newPara;
  let outputTag = output.outputTag;

	if (fndMainStat(mainStats, item) != undefined) { // if this is a main stat
		mainStat.ATK = itemVal;
		newPara.textContent = `Main stat: ${item}: ${itemVal}`;
	} // if
	else if (validateDmgStats(item)) { // if valid, display content
    newPara.textContent = `${item}`; 
	} // else
	outputTag.appendChild(newPara);
} // renderElements()

// Validate the text that was parsed
/**
 * args: (string from array of parsed text), 
 * (obj w/ artifact data) 
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
    return ExtractNum(stat);
  }//
} // validatedmgStats()

/**
 * args: (string from parsed text array), 
 * (obj w/artifact data)
 * removes strings around the numbers, 
 * then saves the numbers 
 * in dmgStats object
 */
function ExtractNum (stat) {
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