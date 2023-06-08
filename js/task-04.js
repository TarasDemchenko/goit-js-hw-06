const refs = {
  incBtn: document.querySelector('[data-action="increment"]'),
  decBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
  counterValue: 0,
};

const incriment = () => {
  refs.counterValue += 1;
  refs.value.textContent = refs.counterValue;
};

const decrement = () => {
  refs.counterValue -= 1;
  refs.value.textContent = refs.counterValue;
};

refs.decBtn.addEventListener("click", decrement);
refs.incBtn.addEventListener("click", incriment);
