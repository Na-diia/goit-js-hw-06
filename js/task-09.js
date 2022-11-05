function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
}

const changeBodyBtn = event => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.body.style.backgroundColor;
}

refs.button.addEventListener('click', changeBodyBtn);