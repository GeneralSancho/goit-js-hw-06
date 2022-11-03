const ingredients = [

  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// document.createElement()
const ulEl = document.querySelector(`#ingredients`);
// const liEl = ingredients.length;
// for (let i = 0; i < ingredients.length; i+=1) {
//   const ingredientsItemEl = document.createElement("li");
//   ingredientsItemEl.textContent = ingredients[i];
//   ingredientsItemEl.class = "item";
//   ulEl.append(ingredientsItemEl);

// console.log(ulEl);
// console.log(ingredientsItemEl.class);

// }

 ingredients.map(el => {
  const ingredientsItemEl = document.createElement("li")
  ingredientsItemEl.textContent = el;
  ingredientsItemEl.class = "item"
  ulEl.append(ingredientsItemEl);
})
