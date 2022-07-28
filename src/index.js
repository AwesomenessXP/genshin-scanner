import printMe from "./test.js";
import { artifactPiece } from "./artifact_scan.js";

// testing code in the main function
const TestIMG = `https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png`;

const newArtifact = artifactPiece(TestIMG);

newArtifact.testOCR();

const IMG2 = `https://www.gamersdecide.com/sites/default/files/authors/u158743/def.jpg`;
const anotherArtifact = artifactPiece(IMG2);
anotherArtifact.testOCR();
