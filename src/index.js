import { artifactPiece } from "./artifacts/artifactScan.js";
import { userImage } from "./sessionStorage/imgDownload.js";
import './styles.css';
import { theme } from "./toggleMode.js";
import { defaultErrorMsg } from './DOM/errorMsg.js'

// DOM elements
const scanBtn = document.querySelector('#scan-btn');
const submit = document.querySelector('#submit');
const fileElem = document.querySelector('#screenshot');
const outputTag = document.getElementById('output');
document.documentElement.className = "dark";
document.querySelector('.mode-toggle').addEventListener('click', theme);
document.addEventListener('DOMContentLoaded', init);

function init() {
	// upload an image
	let newIMG = userImage();
	newIMG.requestImg();
}

// scan the image
scanBtn.addEventListener('click', () => {
	clearStatOutput();
	outputTag.style.visibility = "visible";
	let getImg = sessionStorage.getItem('artifact');
	if (getImg) {
		const gladiatorPiece = artifactPiece(getImg); // getImg is a base64 string in session storage
		gladiatorPiece.extractText();
		console.log(gladiatorPiece.dmgStats);
	}// if
	else { defaultErrorMsg(); }  
});

submit.addEventListener('click', () => {
	outputTag.style.visibility = "visible";
});

window.addEventListener('beforeunload', () => {
	sessionStorage.clear();
});

function clearStatOutput() {
	const output = document.getElementById('output');
	while (output.firstChild) {
		output.removeChild(output.firstChild);
	}
}