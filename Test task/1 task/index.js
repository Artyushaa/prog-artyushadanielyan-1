const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId;
  return (seconds) => {
    timerEl.innerHTML = seconds;
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      const currentValue = parseInt(timerEl.innerHTML);
      if (currentValue > 0) {
        timerEl.innerHTML = currentValue - 1;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа\
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

