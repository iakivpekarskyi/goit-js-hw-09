const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{setInterval((()=>{e.disabled=!0,document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(timerId),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.fadf1dba.js.map
