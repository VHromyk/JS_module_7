
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulList = document.querySelector('#ingredients');
const items = ingredients.map(ingredient => {
    const liElement = document.createElement('li');
    liElement.textContent = ingredient;
    return liElement;
});
console.log(items);
ulList.append(...items);