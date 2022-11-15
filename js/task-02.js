const ingredients = [

  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
const addLi = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList = 'item';
  liEl.textContent = ingredient;
  return liEl;
});
ulEl.append(...addLi);