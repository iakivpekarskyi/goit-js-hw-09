const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;t.addEventListener("click",(function(e){n=setInterval((()=>{t.disabled=!0,document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(e){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.68d6f608.js.map
