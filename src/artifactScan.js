import APIKEY from "./apiKey.js";

export const artifactPiece = (SCREENSHOT) => {
  // ------------------------------------- PUBLIC ATTRIBUTES ------------------------------------------------------------
  // we will return this object to be used by other files
  let dmgStats = {
    mainATK: null,
    subStats: {
      atk: null,
      atkPercent: null,
      critDmg: null,
      critRate: null,
      elemMastery: null,
    }
  };// dmgStats{}

  const regexStats = () => {
    const regex = new RegExp("^CRIT Rate[+-]?([0-9]+\.?[0-9]*)\%$");
    const critDmg = new RegExp("^CRIT DMG[+-]?([0-9]+\.?[0-9]*)\%$");
    const em = new RegExp("^Elemental Mastery[+-]?([0-9]+\.?[0-9]*)\%$");
    const flatATK = new RegExp("^ATK[+-]?[0-9]*$");
    const atkPcnt = new RegExp("^ATK[+-]?([0-9]+\.?[0-9]*)\%$");
  }

  // GET the data from OCR API
  // use fetch api to request data
  const extractText = async () => {
    const error = 'ERROR: unable to process text!';
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
      if (genshinData.ParsedResults[0].ParsedText === '' || genshinData.IsErroredOnProcessing) {
        throw error;
      }
      populateHTML(genshinData);
      console.log(genshinData);
    } catch (error) {
      console.log(error);
      const errorNotif = document.createElement('p');
      document.body.appendChild(errorNotif);
      errorNotif.textContent = error;
    }
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
      const regex = new RegExp("^ATK$");
      if (artifacts[item].match(regex)) {
        dmgStats.mainATK = artifacts[item + 1];
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
    
    if (em.test(stat)) {
      dmgStats.subStats.elemMastery = stat.replace('Elemental Mastery+', '');
      return true;
    }// if
    else if (flatATK.test(stat)) {
      dmgStats.subStats.atk = stat.replace('ATK+', '');
      return true;
    }// else if
    else if (regexStats.regex.test(stat) ||
            regexStats.critDmg.test(stat) ||
            regexStats.critRate.test(stat)) {
      extractNumber(stat)
      return true;
    }// if
  } // validatedmgStats()

  // removes 'CRIT RATE' or 'CRIT DMG' or 'ATK' from the string
  const extractNumber = async (stat) => {
    // const regex = new RegExp("^CRIT Rate[+-]?([0-9]+\.?[0-9]*)\%$");
    // const critDmg = new RegExp("^CRIT DMG[+-]?([0-9]+\.?[0-9]*)\%$");
    // const atkPcnt = new RegExp("^ATK[+-]?([0-9]+\.?[0-9]*)\%$");

    (regexStats.regex.test(stat)) ? dmgStats.subStats.critRate = stat.replace('CRIT Rate+', "") : null;
    (regexStats.critDmg.test(stat)) ? dmgStats.subStats.critDmg = stat.replace('CRIT DMG+', "") : null;
    (regexStats.atkPcnt.test(stat)) ? dmgStats.subStats.atkPercent = stat.replace('ATK+', "") : null;
  } // extractNum()

  return {
    extractText,
    dmgStats,
  };
};