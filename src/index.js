import { artifactPiece } from "./artifact_scan.js";

(function() { // used an IIFE (immediately invoked function expression)
    // scan one artifact
    const TestIMG = `https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png`;
    const gladiatorPiece = artifactPiece(TestIMG);
    gladiatorPiece.extractText();
    console.log(gladiatorPiece.stats);

    // scan another artifact
    const IMG2 = `https://www.gamersdecide.com/sites/default/files/authors/u158743/def.jpg`;
    const emblemPiece = artifactPiece(IMG2);
    emblemPiece.extractText();
    console.log(emblemPiece.stats);
})();

