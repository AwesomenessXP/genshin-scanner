import APIKEY from "./api_key.js";

export const artifactPiece = (SCREENSHOT) => {
  // we will return this object to be used by other files
  let stats = {
    atk: null,
    critDmg: null,
    critRate: null,
    elemMastery: null,
  };

  // GET the data from OCR API
  async function extractText() {
    const reqURL = `https://api.ocr.space/parse/imageurl?apikey=${APIKEY}&url=${SCREENSHOT}&filetype=png&OCREngine=2`;

    try {
      // use fetch api to request data
      const response = await fetch(reqURL);
      const genshinData = await response.json();
      populateHTML(genshinData);
      console.log(genshinData);
    } catch (error) {
      console.log(error);
    }
  } // artifactPiece()

  // --------------------------------- PRIVATE ATTRIBUTES ----------------------------------------------------------------

  // populate the HTML file
  async function populateHTML(scannedTextObj) {
    // validate that
    try {
      // now that we fetched the data, modify it to be outputtable
      const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
      const artifacts = await scannedText.split("\n"); // break up the objects into elements of an array with '\n'
      const section = document.querySelector("body");

      // render the elements to the screen
      for (let item = 0; item < artifacts.length; item++) {
        renderElements(artifacts, section, item);
      } // for
      document.body.append(document.createElement("hr"));
    } catch (error) {
      console.log(error);
    }
  } // populateHTML()

  // Validate the text that was parsed
  function validateStats(stat) {
    let result = false; // initialize result
    // this will contain our artifact names
    const artifacts = new Map();
    artifacts.set("Gladiator's Destiny", "Emblem");

    // ^ means look at the beginning of the string
    const regex = new RegExp("^CRIT Rate");
    const critDmg = new RegExp("^CRIT DMG");
    const em = new RegExp("^Elemental Mastery");

    // if valid, store in the artifact stats object
    if (regex.test(stat) || critDmg.test(stat) || em.test(stat)) {
      result = true;
      em.test(stat) ? (stats.elemMastery = stat) : null;
      cleanStats(regex, critDmg, stat);
    } // if
    return result;
  } // validateStats()

  async function cleanStats(regex, critDmg, stat) {
    // removes 'CRIT RATE' or 'CRIT DMG' from the string
    if (regex.test(stat)) {
      // modify the text then save it
      stats.critRate = stat.replace("CRIT Rate+", "").replace("%", "");
    } // if
    if (critDmg.test(stat)) {
      // modify the text then save it
      stats.critDmg = stat.replace("CRIT DMG+", "").replace("%", "");
    }
  } // cleanStats() --> return null

  async function renderElements(artifacts, section, item) {
    // render a new <p> element
    const newPara = document.createElement("p");

    // if stat is ATK --> grab the next element because it is the actual number else, validate the stat
    if (artifacts[item] === "ATK") {
      // this is our exception because ATK isn't properly read
      stats.atk = artifacts[item + 1];
      newPara.textContent = `${artifacts[item + 1]}`;
    } // if
    else {
      if (validateStats(artifacts[item])) {
        newPara.textContent = `${artifacts[item]}`;
      } // if
      else {
        console.log("This stat is not factored in calculating damage");
      } // else
    } // else
    section.appendChild(newPara);
  } // renderElements()

  return {
    extractText,
    stats,
  };
};
