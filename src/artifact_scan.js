export const artifactPiece = (screenshot) => {
  const APIKEY = "K85339385488957";
  // GET the data from OCR API
  async function extractText() {
    const reqURL = `https://api.ocr.space/parse/imageurl?apikey=${APIKEY}&url=${screenshot}&filetype=png&OCREngine=2`;

    try {
      // use fetch api to request data
      const response = await fetch(reqURL);
      const genshinData = await response.json();
      populateHTML(genshinData);
      console.log(genshinData);
    } catch (error) {
      console.log(error);
    }
  }

  // populate the HTML file
  async function populateHTML(scannedTextObj) {
    // now that we fetched the data, modify it to be outputtable
    const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
    const artifacts = scannedText.split("\n"); // break up the objects into elements of an array with '\n'
    const section = document.querySelector("body");

    // render the elements to the screen
    artifacts.forEach((stat) => {
      // ^ means look at the beginning of the string
      if (validateStats(stat) === true) {
        const newPara = document.createElement("p");
        newPara.textContent = `${stat}`;
        section.appendChild(newPara);
      }
    });

    document.body.append(document.createElement("hr"));
  }

  // Validate the text that was parsed
  function validateStats(stat) {
    let result = false; // initialize result
    // this will contain our artifact names
    const artifacts = new Map();
    artifacts.set("Gladiator's Destiny", "Emblem");

    // private attributes
    const regex = new RegExp("^CRIT");
    const atk = new RegExp("^ATK");
    const em = new RegExp("^Elemental Mastery");

    if (regex.test(stat) || atk.test(stat) || em.test(stat)) {
      result = true;
    } // if
    return result;
  }

  return {
    extractText,
  };
};
