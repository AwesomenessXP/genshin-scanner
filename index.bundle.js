(()=>{"use strict";!async function(){try{const t=await fetch("https://api.ocr.space/parse/imageurl?apikey=K85339385488957&url=https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png&filetype=png&OCREngine=2");!function(t){const e=t.ParsedResults[0].ParsedText.split("\n"),o=document.querySelector("body");console.log(e),e.forEach((t=>{const e=document.createElement("p");e.textContent=`${t}`,o.appendChild(e)}))}(await t.json())}catch(t){console.log(Error("Not able to fetch data"))}}()})();