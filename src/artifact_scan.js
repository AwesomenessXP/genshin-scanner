import APIKEY from "./api_key.js";

  export const artifactPiece = (SCREENSHOT) => {
    // ------------------------------------- PUBLIC ATTRIBUTES ------------------------------------------------------------

    // we will return this object to be used by other files
    let stats = {
      atk: null,
      critDmg: null,
      critRate: null,
      elemMastery: null,
    };// stats{}

  // GET the data from OCR API
  // use fetch api to request data
    async function extractText() {
      const reqURL = `https://api.ocr.space/parse/imageurl?apikey=${APIKEY}
                        &url=${SCREENSHOT}&filetype=png&OCREngine=2`;
      try {
        const response = await fetch(reqURL);
        const genshinData = await response.json();
        populateHTML(genshinData);
        console.log(genshinData);
      } catch (error) { console.log(error); }
    } // artifactPiece()
    
  // --------------------------------- PRIVATE ATTRIBUTES ----------------------------------------------------------------
    
  // populate the HTML file
  // now that we fetched the data, modify it to be outputtable
  // break up the objects into elements of an array with '\n'
  // render the elements to the screen
  async function populateHTML(scannedTextObj) {
    try {
      const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
      const artifacts = await scannedText.split("\n");
      const section = document.querySelector("body");
      for (let item = 0; item < artifacts.length; item++) {
        renderElements(artifacts, section, item);
      } // for
      document.body.append(document.createElement("hr"));
    } catch (error) { console.log(error); }
  } // populateHTML()

  // Validate the text that was parsed
  // this will contain our artifact names
  // ^ means look at the beginning of the string
  // if valid, store in the artifact stats object
  function validateStats(stat) {
    const artifacts = new Map().set("Gladiator's Destiny", "Emblem"); // TODO: WILL USE LATER!!
    const regex = new RegExp("^CRIT Rate");
    const critDmg = new RegExp("^CRIT DMG");
    const em = new RegExp("^Elemental Mastery");
    
    if (regex.test(stat) || critDmg.test(stat)) {
      cleanStats(regex, critDmg, stat);
      return true;
    } // if
    else if (em.test(stat)) { 
      stats.elemMastery = stat; // if / else
      return true;
    } // else if
    return false;
  } // validateStats()

  // removes 'CRIT RATE' or 'CRIT DMG' from the string
  // modify the text then save it
  async function cleanStats(regex, critDmg, stat) {
    if (regex.test(stat)) {
      stats.critRate = stat
        .replace("CRIT Rate+", "")
        .replace("%", "");
    } // if
    if (critDmg.test(stat)) {
      stats.critDmg = stat
        .replace("CRIT DMG+", "")
        .replace("%", ""); // if
    } // if
  } // cleanStats()

  // render a new <p> element
  // ATK stats are our exception
  // used an immediately invoked func expression
  async function renderElements(artifacts, section, item) {
    const newPara = document.createElement("p"); 
    if (artifacts[item] === "ATK") {
      stats.atk = artifacts[item + 1]; 
      newPara.textContent = `${artifacts[item + 1]}`;
    } // if
    else { 
      (validateStats(artifacts[item])) ?
          (newPara.textContent = `${artifacts[item]}`) // if
          : console.log(`This stat is not factored in calculating damage`); // else
    } // else
    section.appendChild(newPara);
  } // renderElements()

  return {
    extractText,
    stats,
  };
};
