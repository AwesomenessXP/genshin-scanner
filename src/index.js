import { artifactPiece } from "./artifactScan.js";
import { userImage } from "./imgDownload.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    // upload an image
    let newIMG = userImage();
    newIMG.requestImg();

    // scan the image
    const scanBtn = document.querySelector('#scan-btn');
    scanBtn.addEventListener('click', () => {
        let getImg = sessionStorage.getItem('artifact');
        const gladiatorPiece = artifactPiece(getImg);
        gladiatorPiece.extractText();
        console.log(gladiatorPiece.dmgStats);
    });
}
