const refs = {
  formEl: document.querySelector(".login-form"),
  emailInput: document.querySelector('[name="email"]'),
  passwordInput: document.querySelector('[name="password"]'),
  submitBtn: document.querySelector('[type="submit"]'),
};

const onSubmitBtnClick = (event) => {
  event.preventDefault();

  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;

  const userData = {email, password,};

  if(email.length === 0 || password.length === 0) {
    window.alert("Заповніть усі поля");
    refs.submitBtn.setAttribute('disabled');
  }
  
  console.log(userData);
};

refs.formEl.addEventListener("submit", onSubmitBtnClick);
