(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(81),r=t.n(a),o=t(645),c=t.n(o)()(r());c.push([n.id,":root.dark {\n    --text-color: white;\n    --background: #0C0F1D;\n    --canvas-background: rgba(247, 247, 247, 0.37);\n    --btn-color: linear-gradient(to right, #8EC5FC, #E0C3FC);\n    --btn-text: #0D1117;\n    --nav-bg: rgb(27,29,42);\n    --edge-radius: 12px;\n    --gradient: linear-gradient(to bottom, #0D1117, rgb(80, 64, 116));\n}\n\n:root.light {\n    --text-color: #2430A9;\n    --background: white;\n    --canvas-background: rgba(128, 128, 128, 0.199);\n    --btn-color: linear-gradient(to right, #3742c2, #53B0D9);\n    --btn-text: white;\n    --edge-radius: 12px;\n    --gradient: linear-gradient(to bottom, #8EC5FC, #e8d4fc);\n    --nav-bg: rgb(208, 235, 243);\n}\n\n* {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    margin: 0;\n    overflow-x: hidden;\n}\n\nbody {\n    color: var(--text-color);\n    background-image: var(--gradient);\n    background-size: 100vw 100vh;\n}\n\ncanvas {\n    width: 100%;\n    float: left;\n    background-color: var(--canvas-background);\n}\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 15px;\n    border-bottom: 1px solid;\n    background-color: var(--nav-bg);\n    border-color: gray;\n}\n\nnav > button {\n    margin: 15px 0;\n}\n\n.content {\n    font-weight: bold;\n    width: auto;\n    margin-top: 15vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.content > .input, .content > .canvas {\n    margin: 0 20px 0 20px;\n}\n\n.content > .input {\n    width: auto;\n    padding: 10px 0;\n    margin: 20px;\n    display: grid;\n    grid-template: repeat(1, 1fr) / 1fr;\n    gap: 20px;\n}\n\nbutton {\n    color: var(--btn-text);\n    background-image: var(--btn-color);\n    border-radius: var(--edge-radius);\n    border: none;\n    padding: 5px 10px;\n    font-weight: 700;\n    letter-spacing: 3%;\n}\n\nbutton:hover {\n    opacity: 80%;\n    cursor: pointer;\n    transform: scale(1.08);\n    transition: transform 0.15s ease-out;\n}\n\n.content > .canvas {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content > .canvas * {\n    margin: 5px;\n}\n\nol *{\n    margin: 15px;\n}\n\nimg {\n    border-radius: 5px;\n}\n\n@media (max-width: 1024px) {\n    .content {\n        margin: 3vh 0;\n    }\n}\n\n@media (max-width: 1024px) {\n    body {\n        background-size: 100vw 150vh;\n    }\n}\n\n@media (max-width: 768px) {\n    img {\n        width: 70%;\n        height: auto;\n    }\n}\n\n@media (max-width: 414px) {\n    body {\n        background-size: 100vw 140vh;\n    }\n}\n\n@media (max-width: 390px) {\n    img {\n        width: 80%;\n        height: auto;\n    }\n    \n    body {\n        background-size: 100vw 130vh;\n    }\n}\n\n",""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},c=[],i=0;i<n.length;i++){var s=n[i],d=a.base?s[0]+a.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=r(m,a);a.byIndex=i,e.splice(i,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<o.length;c++){var i=t(o[c]);e[i].references--}for(var s=a(n,r),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(){return"K85339385488957"}const e=()=>({critRate:new RegExp("^CRIT Rate[+-]?([0-9]+.?[0-9]*)%$"),critDmg:new RegExp("^CRIT DMG[+-]?([0-9]+.?[0-9]*)%$"),em:new RegExp("^Elemental Mastery[+-]?([0-9]+.?[0-9]*)%$"),flatATK:new RegExp("^ATK[+-]?[0-9]*$"),atkPcnt:new RegExp("^ATK[+-]?([0-9]+.?[0-9]*)%$")}),a=()=>{const n=document.createElement("p");n.textContent="ERROR: unable to process text!",document.body.appendChild(n),document.body.append(document.createElement("hr"))},r=n=>{const e=document.createElement("p");document.body.appendChild(e),e.textContent=n,document.body.append(document.createElement("hr"))},o=async(n,t,a,r)=>{const o=document.createElement("p"),c=new RegExp("^ATK$");n[a].match(c)?(r.mainStats.ATK=n[a+1],o.textContent=`Main stat: ${n[a]}: ${n[a+1]}`):function(n,t){return(new Map).set("Gladiator's Destiny","Emblem"),e().em.test(n)?(t.subStats.elemMastery=n.replace("Elemental Mastery+",""),!0):e().flatATK.test(n)?(t.subStats.atk=n.replace("ATK+",""),!0):!!(e().critRate.test(n)||e().critDmg.test(n)||e().atkPcnt.test(n))&&(((n,t)=>{e().critRate.test(n)&&(t.subStats.critRate=n.replace("CRIT Rate+","").replace("%","")),e().critDmg.test(n)&&(t.subStats.critDmg=n.replace("CRIT DMG+","").replace("%","")),e().atkPcnt.test(n)&&(t.subStats.atkPercent=n.replace("ATK+","").replace("%",""))})(n,t),!0)}(n[a],r)?o.textContent=`${n[a]}`:console.log("This stat is not factored in calculating damage"),t.appendChild(o)},c=()=>({requestImg:async()=>{document.getElementById("screenshot").addEventListener("change",(function(){try{const n=new FileReader;n.addEventListener("load",(()=>{sessionStorage.setItem("artifact",n.result)})),n.readAsDataURL(this.files[0])}catch(n){r(n="ERROR: no image found!")}})),document.getElementById("submit").addEventListener("click",(()=>{(()=>{const n=sessionStorage.getItem("artifact");if(n){const e=new Image,t=document.getElementById("img-preview"),a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),e.src=n,e.onload=()=>{var n=Math.min(t.width/e.width,t.height/e.height),r=t.width/2-e.width/2*n,o=t.height/2-e.height/2*n;a.drawImage(e,r,o,e.width*n,e.height*n)}}else a()})()}))}});var i=t(379),s=t.n(i),d=t(795),l=t.n(d),u=t(569),p=t.n(u),m=t(565),g=t.n(m),h=t(216),f=t.n(h),v=t(589),b=t.n(v),x=t(28),y={};y.styleTagTransform=b(),y.setAttributes=g(),y.insert=p().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),s()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals,document.documentElement.className="dark",document.querySelector(".mode-toggle").addEventListener("click",(function(){const n=document.documentElement,e="dark"===n.className?"light":"dark";n.className=e})),document.addEventListener("DOMContentLoaded",(function(){c().requestImg(),document.querySelector("#scan-btn").addEventListener("click",(()=>{let e=sessionStorage.getItem("artifact");if(e){const t=(e=>{const t={mainStats:{ATK:null,ATKPCNT:null,CRITDMG:null,CRITRATE:null,EM:null,ANEMO:null,CRYO:null,ELECTRO:null,GEO:null,HYDRO:null,PYRO:null,DENDRO:null},subStats:{atk:null,atkPercent:null,critDmg:null,critRate:null,elemMastery:null}};return{extractText:async()=>{try{var a=new Headers;a.append("apikey",`${n}`);var c=new FormData;c.append("language","eng"),c.append("base64Image",`${e}`),c.append("OCREngine",2);var i={method:"POST",headers:a,body:c,redirect:"follow"};const s=await fetch("https://api.ocr.space/parse/image",i),d=await s.json();if(""===d.ParsedResults[0].ParsedText||d.IsErroredOnProcessing)throw"Unable to process image!";(async(n,e)=>{try{const t=n.ParsedResults[0].ParsedText,a=await t.split("\n"),r=document.querySelector("body");for(let n=0;n<a.length;n++)o(a,r,n,e);document.body.append(document.createElement("hr"))}catch(n){r(n="ERROR: unable to render data!")}})(d,t),console.log(d)}catch(n){r("Files must be less than 1 MB!!")}},dmgStats:t}})(e);t.extractText(),console.log(t.dmgStats)}else a()}))}))})()})();