import APIKEY from "./apiKey.js";

export const artifactPiece = (SCREENSHOT) => {
  // ------------------------------------- PUBLIC ATTRIBUTES ------------------------------------------------------------
  // we will return this object to be used by other files
  let dmgStats = {
    atk: null,
    atkPercent: null,
    critDmg: null,
    critRate: null,
    elemMastery: null,
  };// dmgStats{}

  // GET the data from OCR API
  // use fetch api to request data
  const extractText = async () => {
    const reqURL = `https://api.ocr.space/parse/image`;
    try {
      var myHeaders = new Headers();
      myHeaders.append("apikey", `${APIKEY}`);

      var formdata = new FormData();
      formdata.append("language", "eng");
      formdata.append("base64Image", `${SCREENSHOT}`);
      formdata.append("OCREngine", 2);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      const response = await fetch(reqURL, requestOptions)
      const genshinData = await response.json();
      populateHTML(genshinData);
      console.log(genshinData);
    } catch (error) { console.log(error); }
  } // artifactPiece()
    
  // --------------------------------- PRIVATE ATTRIBUTES ----------------------------------------------------------------
    
  // populate the HTML file
  const populateHTML = async (scannedTextObj) => {
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

    // render a new <p> element
    const renderElements = async (artifacts, section, item) => {
      const newPara = document.createElement("p");
      if ((artifacts[item] === "ATK") && (artifacts[item+1] >= '0')) {
        dmgStats.atk = artifacts[item + 1];
        newPara.textContent = `${artifacts[item + 1]}`;
      } // if
      else {
        (validateDmgStats(artifacts[item])) ?
          (newPara.textContent = `${artifacts[item]}`) // if
          : console.log(`This stat is not factored in calculating damage`); // else
      } // else
      section.appendChild(newPara);
    } // renderElements()

  // Validate the text that was parsed
  const validateDmgStats = (stat) => {
    const artifacts = new Map().set("Gladiator's Destiny", "Emblem"); // TODO: WILL USE LATER!!
    const regex = new RegExp("^CRIT Rate");
    const critDmg = new RegExp("^CRIT DMG");
    const em = new RegExp("^Elemental Mastery");
    
    if (regex.test(stat) || critDmg.test(stat)) {
      cleanDmgStats(regex, critDmg, stat);
      return true;
    } // if
    else if (em.test(stat)) {
      dmgStats.elemMastery = stat; // if / else
      return true;
    } // else if
    return false;
  } // validatedmgStats()

  // removes 'CRIT RATE' or 'CRIT DMG' from the string
  const cleanDmgStats = async (regex, critDmg, stat) => {
    if (regex.test(stat)) {
      dmgStats.critRate = stat
        .replace("CRIT Rate+", "")
        .replace("%", "");
    } // if
    if (critDmg.test(stat)) {
      dmgStats.critDmg = stat
        .replace("CRIT DMG+", "")
        .replace("%", ""); // if
    } // if
  } // cleandmgStats()

  return {
    extractText,
    dmgStats,
  };
};