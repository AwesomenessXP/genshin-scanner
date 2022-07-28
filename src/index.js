import { artifactPiece } from "./artifactScan.js";
import { userImage } from "./imgDownload.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    
    // upload an image
    const newIMG = userImage();
    newIMG.requestImg();
    let screenshot = newIMG.getImg();
    screenshot = String(screenshot);
    const base64IMG = screenshot.replace(/[\r\n]/gm, '');

    const scanBtn = document.querySelector('#scan-btn');
    scanBtn.addEventListener('click', () => {
        // scan one artifact
        // const TestIMG = `https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png`;
        // console.log(screenshot);
        const gladiatorPiece = artifactPiece(base64IMG);
        gladiatorPiece.extractText();
        console.log(gladiatorPiece.dmgStats);
        console.log('done');
    });

    // // scan another artifact
    // const IMG2 = `https://www.gamersdecide.com/sites/default/files/authors/u158743/def.jpg`;
    // const emblemPiece = artifactPiece(IMG2);
    // emblemPiece.extractText();
    // console.log(emblemPiece.dmgStats);
}


    


