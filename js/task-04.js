const refs = {
  increaseBtn: document.querySelector('[data-action="increment"]'),
  decreseBtn: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector("#value"),
};

let currentValue = 0;

const onIncreaseBtnClick = () => {
  currentValue += 1;
  refs.valueEl.textContent = currentValue.toString();
};

const onDecreseBtnClick = () => {
  currentValue -= 1;
  refs.valueEl.textContent = currentValue.toString();
};

refs.increaseBtn.addEventListener('click', onIncreaseBtnClick);
refs.decreseBtn.addEventListener('click', onDecreseBtnClick);
