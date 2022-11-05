const refs = {
    form : document.querySelector('.login-form'),
}

const onFormSubmit = event => {
  event.preventDefault();

  const formEmail = event.currentTarget.elements.email.value;
  const formPassword = event.currentTarget.elements.password.value; 

   const allData = {};
   
  if (formEmail === '' || formPassword === ''){
    alert('Bсі поля повинні бути заповнені!');
 }else  {
  allData.email = formEmail;
  allData.password = formPassword;
  console.log(allData);
  refs.form.reset();
}
}

refs.form.addEventListener('submit', onFormSubmit);
