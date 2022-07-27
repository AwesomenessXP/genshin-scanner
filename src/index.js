import printMe from './test.js';

const APIKEY = 'K85339385488957';

// GET the data from OCR API
async function testOCR() {
    const imageURL = `https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png`;
    const reqURL = `https://api.ocr.space/parse/imageurl?apikey=${APIKEY}&url=${imageURL}&filetype=png&OCREngine=2`;

    try {
        // use fetch api to request data
        const response = await fetch(reqURL);
        const genshinData = await response.json();
        populateHTML(genshinData);
    } catch(error) {
        console.log(error);
    }
}

// populate the HTML file
async function populateHTML(scannedTextObj) {
    // now that we fetched the data, modify it to be outputtable
    const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
    const finalText = scannedText.split('\n'); // break up the objects into elements of an array with '\n'
    const section = document.querySelector('body');

    // render the elements to the screen 
    console.log(finalText);
    finalText.forEach((text) => {
        const newPara = document.createElement('p');
        newPara.textContent = `${text}`;
        section.appendChild(newPara);
    });
}

// document.body.appendChild(component());
testOCR();