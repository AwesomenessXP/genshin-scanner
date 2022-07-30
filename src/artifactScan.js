import APIKEY from "./apiKey.js";
import { populateHTML } from "./renderToScreen.js";

export const artifactPiece = (SCREENSHOT) => {
  // ------------------------------------- PUBLIC ATTRIBUTES ------------------------------------------------------------
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
      document.body.append(document.createElement("hr"));
    }
  } // artifactPiece()

  return {
    extractText,
    // dmgStats,
  };
};