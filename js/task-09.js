function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

const onChangeColorBtnClick = () => {
  const randomColor = getRandomHexColor();

  currentColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};

changeColorBtn.addEventListener("click", onChangeColorBtnClick);