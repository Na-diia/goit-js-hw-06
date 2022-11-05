function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}

const createBoxes = amount => {
  const addDiv = [];
  
  for( let i = 0; i < amount; i += 1) {
   const newDiv = document.createElement('div');
   
   newDiv.style.backgroundColor = getRandomHexColor();
   newDiv.style.height = `${30 + 10 * i}px`;
   newDiv.style.width = `${30 + 10 * i}px`;

   addDiv.push(newDiv);
  }
  return addDiv;
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = '';
}

refs.btnCreate.addEventListener('click', () => {
  let clickOnCreateBtn = createBoxes(refs.input.value);
  refs.divBoxes.append(...clickOnCreateBtn);
});
refs.btnDestroy.addEventListener('click', destroyBoxes);