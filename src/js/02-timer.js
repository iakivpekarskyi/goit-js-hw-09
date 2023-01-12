import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const startBtn = document.querySelector("[data-start]");
const picker = document.querySelector("#datetime-picker");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
let startTime = null;
let timerId = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),

  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future", {
        width: "500px",
        borderRadius: "15px",
      });
    } else {
      startTime = selectedDates[0].getTime();
      startBtn.disabled = false;
    }
  },
};

flatpickr(picker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const daysLeft = addLeadingZero(Math.floor(ms / day));
  const hoursLeft = addLeadingZero(Math.floor((ms % day) / hour));
  const minutesLeft = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const secondsLeft = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { daysLeft, hoursLeft, minutesLeft, secondsLeft };

  function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
  }
}

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    deltaTime = startTime - currentTime;
    const textTime = convertMs(deltaTime);

    days.innerText = textTime.daysLeft;
    hours.innerText = textTime.hoursLeft;
    minutes.innerText = textTime.minutesLeft;
    seconds.innerText = textTime.secondsLeft;

    if (deltaTime < 1000) {
      clearInterval(timerId);
      Notiflix.Notify.success("Time is up", {
        width: "500px",
        borderRadius: "15px",
      });
    }
  }, 1000);
});
