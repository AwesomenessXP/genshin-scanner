import printMe from './test.js';

const APIKEY = 'K85339385488957';

// GET the data from OCR API
function testOCR() {
    const imageURL = `https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png`;
    const reqURL = `https://api.ocr.space/parse/imageurl?apikey=${APIKEY}&url=${imageURL}&filetype=png&OCREngine=2`;
    fetch(reqURL)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            populateHTML(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

// populate the HTML file
function populateHTML(scannedTextObj) {
    const scannedText = scannedTextObj.ParsedResults[0].ParsedText;
    const finalText = scannedText.split('\n');
    const section = document.querySelector('body');

    console.log(finalText);
    finalText.forEach((text) => {
        const newPara = document.createElement('p');
        newPara.textContent = `${text}`;
        section.appendChild(newPara);
    });
}

// document.body.appendChild(component());
testOCR();