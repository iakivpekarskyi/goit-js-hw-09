const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    startBtn.disabled = true;
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
