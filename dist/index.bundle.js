(()=>{"use strict";var t={90:(t,e,n)=>{function a(){return"K85339385488957"}n.d(e,{Z:()=>a})},802:(t,e,n)=>{n.d(e,{c:()=>o});var a=n(90);const o=t=>{let e={atk:null,critDmg:null,critRate:null,elemMastery:null};async function n(t,n,a){const o=document.createElement("p");"ATK"===t[a]?(e.atk=t[a+1],o.textContent=`${t[a+1]}`):function(t){(new Map).set("Gladiator's Destiny","Emblem");const n=new RegExp("^CRIT Rate"),a=new RegExp("^CRIT DMG"),o=new RegExp("^Elemental Mastery");return n.test(t)||a.test(t)?(async function(t,n,a){t.test(a)&&(e.critRate=a.replace("CRIT Rate+","").replace("%","")),n.test(a)&&(e.critDmg=a.replace("CRIT DMG+","").replace("%",""))}(n,a,t),!0):!!o.test(t)&&(e.elemMastery=t,!0)}(t[a])?o.textContent=`${t[a]}`:console.log("This stat is not factored in calculating damage"),n.appendChild(o)}return{extractText:async function(){const e=`https://api.ocr.space/parse/imageurl?apikey=${a.Z}\n                        &url=${t}&filetype=png&OCREngine=2`;try{const t=await fetch(e),a=await t.json();!async function(t){try{const e=t.ParsedResults[0].ParsedText,a=await e.split("\n"),o=document.querySelector("body");for(let t=0;t<a.length;t++)n(a,o,t);document.body.append(document.createElement("hr"))}catch(t){console.log(t)}}(a),console.log(a)}catch(t){console.log(t)}},stats:e}}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var c=e[a]={exports:{}};return t[a](c,c.exports,n),c.exports}n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(802);const e=(0,t.c)("https://upload-os-bbs.hoyolab.com/upload/2020/11/29/71442388/d5c6f4c21ef5bacd7b647ad04fb5e419_7454029195115335204.png");e.extractText(),console.log(e.stats);const a=(0,t.c)("https://www.gamersdecide.com/sites/default/files/authors/u158743/def.jpg");a.extractText(),console.log(a.stats)})()})();