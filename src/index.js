import printMe from './test.js';

const APIKEY = 'K85339385488957';

// GET the data from OCR API
function testOCR() {
    const imageURL = `https://cdn.gamestegy.com/posts-images/2-yzBiFjw0NA.jpg`;
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