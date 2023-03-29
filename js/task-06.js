const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
  const currentValue = event.currentTarget.value;
  
  if(currentValue.length !== 6){
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }

  if(currentValue.length === 6){
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
})