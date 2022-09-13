(()=>{"use strict";var e={61:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"body{width:100 vw;height:100 vh}#page-wrap{height:95vh;padding:0;margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center}#page-wrap main{flex-basis:75%;min-width:50%;padding:16px;display:flex;flex-direction:column;gap:20px}footer{height:5vh}*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role=list],ol[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media(prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}main #location{font-size:2rem;font-weight:500}main #temperature{font-size:2.5rem;font-weight:700}main #description{font-size:1.1rem}main #feels{font-size:1.1rem}body{background-color:teal}footer{background-color:lime}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var m=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=i(p,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var s=r(e,i),u=0;u<o.length;u++){var l=n(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var i=n(379),o=n.n(i),a=n(795),c=n.n(a),s=n(569),u=n.n(s),l=n(565),d=n.n(l),m=n(216),p=n.n(m),f=n(589),g=n.n(f),h=n(61),y={};y.styleTagTransform=g(),y.setAttributes=d(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const v=n.p+"images/4f24dfff1b27bbc33a63.svg",b=n.p+"images/fc4f1f6aaef2e16b5646.svg",x=n.p+"images/1863a9ba457a16d881c9.svg",w=n.p+"images/37c2825efad978a526a3.svg",E=n.p+"images/55e017ebb392b8299127.svg",T=(document.querySelector("body"),document.getElementById("time")),I=document.getElementById("location"),B=document.getElementById("temperature"),S=document.getElementById("description"),N=document.getElementById("feels"),j=document.getElementById("humidity-image"),k=document.getElementById("humidity"),P=document.getElementById("min-image"),$=document.getElementById("min"),M=document.getElementById("max-image"),C=document.getElementById("max"),_=document.getElementById("wind-image"),A=document.getElementById("wind"),D=document.getElementById("visibility-image"),L=document.getElementById("visibility"),z=document.getElementById("search-bar"),O=document.getElementById("search-button"),q=document.getElementById("units");let Z="celsius";function F(e){return`${(Number(e)-273.15).toPrecision(3)} ℃`}function H(e){return`${(1.8*(Number(e)-273.15)+32).toPrecision(4)} ℉`}async function R(n){try{const i=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=eed84943e5486d8a117b70b7eaf2d745`,{mode:"cors"}),o=await i.json();console.log(o),function(n,i="celsius"){var o,a;T.innerText=(o=n.dt,a=function(n){return e(1,arguments),t(1e3*r(n))}(o).toString(),a.split(" ").splice(0,5).join(" ")),I.innerText=`${n.name}, ${n.sys.country}`,"celsius"===i?(B.innerText=F(n.main.temp),N.innerText=F(n.main.feels_like),$.innerText=F(n.main.temp_min),C.innerText=F(n.main.temp_max)):(B.innerText=H(n.main.temp),B.innerText=H(n.main.feels_like),$.innerText=H(n.main.temp_min),C.innerText=H(n.main.temp_max)),S.innerText=n.weather[0].main,k.innerText=`${n.main.humidity}% Humidity`,A.innerText=`${n.wind.speed} km/h`,L.innerText=`${(n.visibility/1e3).toPrecision(3)} km/h`}(o,Z)}catch{console.log("oops")}}j.src=v,P.src=x,M.src=b,_.src=E,D.src=w,O.addEventListener("click",(()=>{R(z.value)})),q.addEventListener("click",(()=>{Z="celsius"===Z?"farenheit":"celsius",q.innerText="celsius"===Z?"℃":"℉",R(z.value||"London")})),R("London")})()})();