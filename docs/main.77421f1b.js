parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function t(t,r){return a(t)||o(t,r)||n(t,r)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}function a(t){if(Array.isArray(t))return t}var i=function(t,e){var n=e.name,r=e.string,o=document.createElement("li"),a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),a.setAttribute("download",n),a.innerText=n,o.appendChild(a),t.appendChild(o)},u=function(e){var n={};return Object.entries(e).forEach(function(e){var r=t(e,2),o=r[0],a=r[1];n[o]="".concat(a).trim()}),n},l=function(t){var e=t["!ref"].split(":")[1],n=XLSX.utils.sheet_to_json(t,{range:"A2:".concat(e)}).map(u);return{total:n.length,data:n}},c=function(t){var e=t["!ref"].split(":")[1],n=XLSX.utils.sheet_to_json(t,{range:"A2:".concat(e)}).map(u);return{total:n.length,data:n}},s=function(t){var e=XLSX.utils.sheet_to_json(t,{range:t["!ref"]}).map(u);return{total:e.length,data:e}},f=function(e){var n=XLSX.read(e,{type:"buffer"}),r={"Item Stats":l,Strings:s,"Experience and Gold":c,Achievements:s,Ranks:s,Characters_info:s,LvlUp:s,ChestReward:s,TutorialBoxes:s,BattlePass:s,Bundles_Shop:s,InApps:s,CurrencyConverter:s},o={};return Object.entries(r).forEach(function(e){var r=t(e,2),a=r[0],i=r[1],u=n.Sheets[a];void 0!==u&&(o[a]=i(u))}),{values:o,sheets:Object.keys(r)}},d=function(){var t=document.getElementById("upload"),e=document.getElementById("output");t.addEventListener("change",function(t){var n=t.target.files[0];if(!n)return!1;e.innerHTML="";var r=new FileReader;r.readAsArrayBuffer(n),r.onload=function(){var t=f(r.result);t.sheets.forEach(function(n){var r=t.values[n],o=JSON.stringify(r,null,2);i(e,{name:"".concat(n,".json"),string:o})})},r.onprogress=function(t){var e=t.total>0?t.loaded/t.total:0;console.log({progress:e})},r.onerror=function(){console.log(r.error)}})};window.addEventListener("load",d);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.77421f1b.js.map