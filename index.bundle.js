(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"* {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n:root.dark {\n    --text-color: white;\n    --background: #0D1117;\n    --canvas-background: rgba(247, 247, 247, 0.37);\n}\n\n:root.light {\n    --text-color: black;\n    --background: white;\n    --canvas-background: rgba(128, 128, 128, 0.199);\n}\n\nbody {\n    background-color: var(--background);\n    color: var(--text-color);\n}\n\ncanvas {\n    background-color: var(--canvas-background);\n}",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],d=a.base?i[0]+a.base:i[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=r(m,a);a.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var i=a(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){return"K85339385488957"}const t=()=>({requestImg:async()=>{document.getElementById("screenshot").addEventListener("change",(function(){const e=new FileReader;e.addEventListener("load",(()=>{sessionStorage.setItem("artifact",e.result)})),e.readAsDataURL(this.files[0])})),document.getElementById("submit").addEventListener("click",(()=>{const e=sessionStorage.getItem("artifact");if(e){const t=new Image,n=document.getElementById("img-preview"),a=n.getContext("2d");a.clearRect(0,0,640,360),t.src=e,t.onload=()=>{var e=Math.min(n.width/t.width,n.height/t.height),r=n.width/2-t.width/2*e,o=n.height/2-t.height/2*e;a.drawImage(t,r,o,t.width*e,t.height*e)}}}))}});var a=n(379),r=n.n(a),o=n(795),s=n.n(o),c=n(569),i=n.n(c),d=n(565),l=n.n(d),u=n(216),p=n.n(u),m=n(589),g=n.n(m),f=n(28),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,document.querySelector(".mode-toggle").addEventListener("click",(function(){const e=document.documentElement,t="dark"===e.className?"light":"dark";e.className=t})),document.addEventListener("DOMContentLoaded",(function(){t().requestImg(),document.querySelector("#scan-btn").addEventListener("click",(()=>{let t=sessionStorage.getItem("artifact");if(t){const n=(t=>{let n={mainATK:null,subStats:{atk:null,atkPercent:null,critDmg:null,critRate:null,elemMastery:null}};const a=async(e,t,a)=>{const o=document.createElement("p"),s=new RegExp("^ATK$");e[a].match(s)?(n.mainATK=e[a+1],o.textContent=`${e[a+1]}`):r(e[a])?o.textContent=`${e[a]}`:console.log("This stat is not factored in calculating damage"),t.appendChild(o)},r=e=>{(new Map).set("Gladiator's Destiny","Emblem");const t=new RegExp("^CRIT Rate[+-]?([0-9]+.?[0-9]*)%$"),a=new RegExp("^CRIT DMG[+-]?([0-9]+.?[0-9]*)%$"),r=new RegExp("^Elemental Mastery[+-]?([0-9]+.?[0-9]*)%$"),s=new RegExp("^ATK[+-]?[0-9]*$"),c=new RegExp("^ATK[+-]?([0-9]+.?[0-9]*)%$");return r.test(e)?(n.subStats.elemMastery=e.replace("Elemental Mastery+",""),!0):s.test(e)?(n.subStats.atk=e.replace("ATK+",""),!0):t.test(e)||a.test(e)||c.test(e)?(o(e),!0):void 0},o=async e=>{const t=new RegExp("^CRIT Rate[+-]?([0-9]+.?[0-9]*)%$"),a=new RegExp("^CRIT DMG[+-]?([0-9]+.?[0-9]*)%$"),r=new RegExp("^ATK[+-]?([0-9]+.?[0-9]*)%$");t.test(e)&&(n.subStats.critRate=e.replace("CRIT Rate+","")),a.test(e)&&(n.subStats.critDmg=e.replace("CRIT DMG+","")),r.test(e)&&(n.subStats.atkPercent=e.replace("ATK+",""))};return{extractText:async()=>{const n="ERROR: unable to process text!";try{var r=new Headers;r.append("apikey",`${e}`);var o=new FormData;o.append("language","eng"),o.append("base64Image",`${t}`),o.append("OCREngine",2);var s={method:"POST",headers:r,body:o,redirect:"follow"};const n=await fetch("https://api.ocr.space/parse/image",s),c=await n.json();if(""===c.ParsedResults[0].ParsedText||c.IsErroredOnProcessing)throw"ERROR: unable to process text!";(async e=>{try{const t=e.ParsedResults[0].ParsedText,n=await t.split("\n"),r=document.querySelector("body");for(let e=0;e<n.length;e++)a(n,r,e);document.body.append(document.createElement("hr"))}catch(e){console.log(e)}})(c),console.log(c)}catch(n){console.log(n);const e=document.createElement("p");document.body.appendChild(e),e.textContent=n}},dmgStats:n}})(t);n.extractText(),console.log(n.dmgStats)}else{const e=document.createElement("p");e.textContent="ERROR: unable to process text!",document.body.appendChild(e)}}))}))})()})();