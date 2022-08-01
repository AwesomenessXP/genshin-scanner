(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),o=n(645),c=n.n(o)()(r());c.push([e.id,":root.dark {\n    --text-color: white;\n    --background: #0C0F1D;\n    --canvas-background: rgba(247, 247, 247, 0.37);\n    --btn-color: white;\n    --btn-text: #0D1117;\n    --nav-bg: rgb(27,29,42);\n    --edge-radius: 5px;\n}\n\n:root.light {\n    --text-color: #0D1117;\n    --background: white;\n    --canvas-background: rgba(128, 128, 128, 0.199);\n    --btn-color: #0D1117;\n    --btn-text: white;\n    --edge-radius: 5px;\n}\n\n* {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    margin: 0;\n}\n\nbody {\n    color: var(--text-color);\n    background-color: var(--background);\n}\n\ncanvas {\n    /* height: auto;\n    width: 64%; */\n    width: 100%;\n    float: left;\n    background-color: var(--canvas-background);\n}\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 15px;\n    border-bottom: 1px solid;\n    background-color: var(--nav-bg);\n}\n\n.content {\n    margin-top: 15vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.content > .input, .content > .canvas {\n    margin: 0 20px 0 20px;\n}\n\n.content > .input {\n    padding: 10px 0;\n    margin: 20px;\n    display: grid;\n    grid-template: repeat(1, 1fr) / 1fr;\n    gap: 20px;\n    border: 1px solid;\n    border-radius: var(--edge-radius);\n}\n\nbutton {\n    color: var(--btn-text);\n    background-color: var(--btn-color);\n    border-radius: var(--edge-radius);\n    border: none;\n    padding: 5px 10px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    transform: scale(1.08);\n    transition: transform 0.15s ease-out;\n}\n\n.content > .canvas {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content > .canvas * {\n    margin: 5px;\n}\n\nol *{\n    margin: 15px;\n}\n\nimg {\n    border-radius: var(--edge-radius);\n}\n\n",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},c=[],s=0;s<e.length;s++){var i=e[s],l=a.base?i[0]+a.base:i[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var s=n(o[c]);t[s].references--}for(var i=a(e,r),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){return"K85339385488957"}const t=()=>({critRate:new RegExp("^CRIT Rate[+-]?([0-9]+.?[0-9]*)%$"),critDmg:new RegExp("^CRIT DMG[+-]?([0-9]+.?[0-9]*)%$"),em:new RegExp("^Elemental Mastery[+-]?([0-9]+.?[0-9]*)%$"),flatATK:new RegExp("^ATK[+-]?[0-9]*$"),atkPcnt:new RegExp("^ATK[+-]?([0-9]+.?[0-9]*)%$")}),a=()=>{const e=document.createElement("p");e.textContent="ERROR: unable to process text!",document.body.appendChild(e),document.body.append(document.createElement("hr"))},r=e=>{const t=document.createElement("p");document.body.appendChild(t),t.textContent=e,document.body.append(document.createElement("hr"))},o=async(e,n,a,r)=>{const o=document.createElement("p"),c=new RegExp("^ATK$");e[a].match(c)?(r.mainStats.ATK=e[a+1],o.textContent=`Main stat: ${e[a]}: ${e[a+1]}`):function(e,n){return(new Map).set("Gladiator's Destiny","Emblem"),t().em.test(e)?(n.subStats.elemMastery=e.replace("Elemental Mastery+",""),!0):t().flatATK.test(e)?(n.subStats.atk=e.replace("ATK+",""),!0):!!(t().critRate.test(e)||t().critDmg.test(e)||t().atkPcnt.test(e))&&(((e,n)=>{t().critRate.test(e)&&(n.subStats.critRate=e.replace("CRIT Rate+","").replace("%","")),t().critDmg.test(e)&&(n.subStats.critDmg=e.replace("CRIT DMG+","").replace("%","")),t().atkPcnt.test(e)&&(n.subStats.atkPercent=e.replace("ATK+","").replace("%",""))})(e,n),!0)}(e[a],r)?o.textContent=`${e[a]}`:console.log("This stat is not factored in calculating damage"),n.appendChild(o)},c=()=>({requestImg:async()=>{document.getElementById("screenshot").addEventListener("change",(function(){try{const e=new FileReader;e.addEventListener("load",(()=>{sessionStorage.setItem("artifact",e.result)})),e.readAsDataURL(this.files[0])}catch(e){r(e="ERROR: no image found!")}})),document.getElementById("submit").addEventListener("click",(()=>{(()=>{const e=sessionStorage.getItem("artifact");if(e){const t=new Image,n=document.getElementById("img-preview"),a=n.getContext("2d");a.clearRect(0,0,n.width,n.height),t.src=e,t.onload=()=>{var e=Math.min(n.width/t.width,n.height/t.height),r=n.width/2-t.width/2*e,o=n.height/2-t.height/2*e;a.drawImage(t,r,o,t.width*e,t.height*e)}}else a()})()}))}});var s=n(379),i=n.n(s),l=n(795),d=n.n(l),u=n(569),p=n.n(u),m=n(565),g=n.n(m),f=n(216),h=n.n(f),v=n(589),b=n.n(v),y=n(28),x={};x.styleTagTransform=b(),x.setAttributes=g(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h(),i()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,document.documentElement.className="dark",document.querySelector(".mode-toggle").addEventListener("click",(function(){const e=document.documentElement,t="dark"===e.className?"light":"dark";e.className=t})),document.addEventListener("DOMContentLoaded",(function(){c().requestImg(),document.querySelector("#scan-btn").addEventListener("click",(()=>{let t=sessionStorage.getItem("artifact");if(t){const n=(t=>{const n={mainStats:{ATK:null,ATKPCNT:null,CRITDMG:null,CRITRATE:null,EM:null,ANEMO:null,CRYO:null,ELECTRO:null,GEO:null,HYDRO:null,PYRO:null,DENDRO:null},subStats:{atk:null,atkPercent:null,critDmg:null,critRate:null,elemMastery:null}};return{extractText:async()=>{try{var a=new Headers;a.append("apikey",`${e}`);var c=new FormData;c.append("language","eng"),c.append("base64Image",`${t}`),c.append("OCREngine",2);var s={method:"POST",headers:a,body:c,redirect:"follow"};const i=await fetch("https://api.ocr.space/parse/image",s),l=await i.json();if(""===l.ParsedResults[0].ParsedText||l.IsErroredOnProcessing)throw"Unable to process image!";(async(e,t)=>{try{const n=e.ParsedResults[0].ParsedText,a=await n.split("\n"),r=document.querySelector("body");for(let e=0;e<a.length;e++)o(a,r,e,t);document.body.append(document.createElement("hr"))}catch(e){r(e="ERROR: unable to render data!")}})(l,n),console.log(l)}catch(e){r("Files must be less than 1 MB!!")}},dmgStats:n}})(t);n.extractText(),console.log(n.dmgStats)}else a()}))}))})()})();