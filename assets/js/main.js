!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector(".c-open-source"),o=new XMLHttpRequest;o.open("GET","https://api.github.com/users/steffenpedersen/repos?sort=updated",!0),o.onload=function(){let e=JSON.parse(this.response);if(o.status>=200&&o.status<400)(e=e.filter(e=>e.name.includes("steffenpedersen.github.io")||e.name.includes("coding-music"))).forEach(function(e){const t=document.createElement("div");t.setAttribute("class","c-open-source__item");const o=document.createElement("h3");o.textContent=e.name;const r=document.createElement("p");r.textContent=e.description,n&&t&&(n.appendChild(t),t.appendChild(o),t.appendChild(r))});else{const e=document.createElement("marquee");e.textContent="Gah, it's not working!",n&&n.appendChild(e)}},o.send()}]);