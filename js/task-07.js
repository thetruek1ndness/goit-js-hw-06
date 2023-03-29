const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text'); 

rangeRef.addEventListener('input', (event) => {
  const currentValue = event.currentTarget.value;

  textRef.style.fontSize = `${currentValue}px`;
})