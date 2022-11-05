const refs = {
  input: document.querySelector('#validation-input'),
  dataLength: document.querySelector('input[data-length="6"]'),
};

const onInputBlur = event => {
    console.log(event.currentTarget.value.length );
    if(event.currentTarget.value.length === Number(refs.input.dataset.length)) {
      refs.input.classList.add("valid"); 
     refs.input.classList.remove("invalid");
    }else {
     refs.input.classList.remove("valid") ;
     refs.input.classList.add("invalid");
    }
};

refs.input.addEventListener("blur", onInputBlur);
