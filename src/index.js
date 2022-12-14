import { artifactPiece } from "./artifacts/artifactScan.js";
import { userImage } from "./sessionStorage/imgDownload.js";
import './styles.css';
import { theme } from "./toggleMode.js";
import { defaultErrorMsg } from './DOM/errorMsg.js'

document.documentElement.className = "dark";
document.querySelector('.mode-toggle').addEventListener('click', theme);
document.addEventListener('DOMContentLoaded', init);

function init() {
	// upload an image
	let newIMG = userImage();
	newIMG.requestImg();

	// scan the image
	const scanBtn = document.querySelector('#scan-btn');
	scanBtn.addEventListener('click', () => {
		let getImg = sessionStorage.getItem('artifact');
		if (getImg) {
			const gladiatorPiece = artifactPiece(getImg); // getImg is a base64 string in session storage
			gladiatorPiece.extractText();
			console.log(gladiatorPiece.dmgStats);
		}// if
		else { defaultErrorMsg(); }  
	});
}

window.addEventListener('beforeunload', () => {
	sessionStorage.clear();
});