import { artifactPiece } from "./artifactScan.js";
import { userImage } from "./imgDownload.js";
import './styles.css';
import { theme } from "./toggleMode.js";

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
            const gladiatorPiece = artifactPiece(getImg);
          gladiatorPiece.extractText();
          console.log('done');
            // console.log(gladiatorPiece.dmgStats);
        }// if
        else {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "ERROR: unable to process text!";
            document.body.appendChild(errorMessage);
        }  
    });
}
