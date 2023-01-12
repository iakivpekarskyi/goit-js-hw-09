import Notiflix from "notiflix";

const msgOptNotiflix = {
  width: "500px",
  borderRadius: "15px",
};

const form = document.querySelector(".form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = Number(event.target.delay.value);
  let step = Number(event.target.step.value);
  let amount = Number(event.target.amount.value);

  for (let position = 1; position < amount; position += 1) {
    createPromise(position, delay) 
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`,
            msgOptNotiflix
          );
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`,
            msgOptNotiflix
          );
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
const promiseOptions = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseOptions);
    } else {
      reject(promiseOptions);
    }
  });
}
