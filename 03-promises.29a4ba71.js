function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var i=n("7Y9D8");const u={width:"500px",borderRadius:"15px"};function l(e,t){const o=Math.random()>.3,r={position:e,delay:t};return new Promise(((e,t)=>{o?e(r):t(r)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let o=Number(t.target.delay.value),r=Number(t.target.step.value),n=Number(t.target.amount.value);for(let t=1;t<n;t+=1)l(t,o).then((({position:t,delay:o})=>{setTimeout((()=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,u)}),o)})).catch((({position:t,delay:o})=>{setTimeout((()=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,u)}),o)})),o+=r}));
//# sourceMappingURL=03-promises.29a4ba71.js.map
