const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const addLi = elem =>  {
  const createLi = document.createElement('li');
  createLi.textContent = elem;
  createLi.classList.add('item');

  return createLi;
}

const ingredientsItem = ingredients.map(addLi);
ingredientsList.append(...ingredientsItem);
console.log(ingredientsItem);