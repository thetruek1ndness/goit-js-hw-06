function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountInput: document.querySelector('[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesSpot: document.querySelector("#boxes"),
};

refs.boxesSpot.style.marginTop = "40px";
refs.boxesSpot.style.display = "flex";
refs.boxesSpot.style.flexWrap = "wrap";
refs.boxesSpot.style.gap = "15px";


let boxesAmount = 0;
let newBoxes = [];

refs.amountInput.addEventListener('change', (event) => {
  boxesAmount = event.currentTarget.value;
})

const onCreateBtnClick = () => {
  console.log(boxesAmount);

  let boxSize = 30;

  for (let i = 0; i < boxesAmount; i += 1) {
    boxSize += 10;

    const newBox = document.createElement("div");
    
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;

    newBoxes.push(newBox);
  }

  refs.boxesSpot.append(...newBoxes);
};

const onDestroyBtnClick = () => {
  const ourBoxes = refs.boxesSpot.children;

  for (let i = 0; i < ourBoxes.length;) {
    const box = ourBoxes[i];
    box.remove();
  } 
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
