parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GITh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.endpoint=exports.key=void 0;var e="5fa92530863959728838518e";exports.key=e;var t="https://dxccampain-5e3a.restdb.io/rest/user-consent";exports.endpoint=t;
},{}],"Bp4e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.post=n;var e=r(require("./config"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=o?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(n,c,i):n[c]=e[c]}return n.default=e,r&&r.set(e,n),n}function n(t,r){var n=JSON.stringify(t);fetch(e.endpoint,{method:"post",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":e.key,"cache-control":"no-cache"},body:n}).then(function(e){return e.json()}).then(r)}
},{"./config":"GITh"}],"m2L7":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".select_country");e.style.opacity="0.7",e.addEventListener("change",function(){e.style.borderColor="#6f2c91",e.style.opacity="1",e.style.color="#6f2c91"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeSelect=e;
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=require("./modules/post"),t=require("./modules/changeSelect");function n(){var t=document.querySelector("form");t.addEventListener("submit",function(n){n.preventDefault();var l={first_name:t.elements.first_name.value,last_name:t.elements.last_name.value,email:t.elements.email.value,company:t.elements.company.value,country:t.elements.country.value,job_title:t.elements.job_title.value};console.log("myData is:",l),(0,e.post)(l,function(){window.location="asset.html"})})}(0,t.changeSelect)(),n();
},{"./modules/post":"Bp4e","./modules/changeSelect":"m2L7"}]},{},["mpVp"], null)
//# sourceMappingURL=script.3fc575a1.js.map