!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){timerId=setInterval((function(){t.disabled=!0,document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.8cbddd6f.js.map
