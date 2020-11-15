
const listRef = document.querySelectorAll('.item'); /* Находим все элементы с классом item.
Получаем массив с li.item */

console.log(`В списке ${listRef.length} категории`); /*Выводим в консоль строку которая будет брать длину массива*/


listRef.forEach(categories => {
    console.log(`Категория: ${categories.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${categories.querySelectorAll('li').length}`);
}); /* Перебираем li.item и берем каждую ли в categories и ищем в ней h2 и забираем у него textContent, 
а также в каждой categories сщбераем все  li в массив  берем его длину*/