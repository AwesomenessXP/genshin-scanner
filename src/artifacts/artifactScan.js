import APIKEY from "../apiKey.js";
import { populateHTML } from "./processText/renderToScreen.js";
import { customErrorMsg } from "../DOM/errorMsg.js";

export const artifactPiece = (SCREENSHOT) => {
  // ------------------------------------- PUBLIC ATTRIBUTES ------------------------------------------------------------
  const dmgStats = {
    mainStats: {
      ATK: null,
      ATKPCNT: null,
      CRITDMG: null,
      CRITRATE: null,
      EM: null,
      ANEMO: null,
      CRYO: null,
      ELECTRO: null,
      GEO: null,
      HYDRO: null,
      PYRO: null,
      DENDRO: null,
    },
    subStats: {
      atk: null,
      atkPercent: null,
      critDmg: null,
      critRate: null,
      elemMastery: null,
    }
  };// dmgStats{}

  // GET the data from OCR API
  // use fetch api to request data
  const extractText = async () => {
    const outputTag = document.getElementById('output');
    const error = 'ERROR: unable to process text!';
    const reqURL = `https://api.ocr.space/parse/image`;
    try {
      var myHeaders = new Headers();
      myHeaders.append("apikey", `${APIKEY}`);

      var formdata = new FormData();
      formdata.append("language", "eng");
      formdata.append("base64Image", `${SCREENSHOT}`);
      formdata.append("OCREngine", 2);

      var requestOptions = { // send this to the API
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

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
      customErrorMsg("Files must be less than 1 MB!!");
    } // catch()
  } // artifactPiece()

  return {
    extractText,
    dmgStats,
  };
};