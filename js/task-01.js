/*
? Напиши скрипт который:

? Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
? Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
? текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
*/
//Задание 1
const numbersOfCategories =
  document.querySelector("#categories").children.length;
console.log(`Number of categories: ${numbersOfCategories}`);
//Задание 2
const nameOfFirstCategoriesRef = document.querySelector("h2").textContent;
const quantityOfNameCategoriesRef =
  document.querySelector("ul>li>ul").childElementCount;

console.log(`Categories: `, nameOfFirstCategoriesRef);
console.log(`Elements: ${quantityOfNameCategoriesRef}`);

const allItemRef = document.querySelectorAll("ul>li>ul");
for (const item of allItemRef) {
  console.log(`Elements: `, item.childElementCount);
}
// console.log(allItemRef);

// const nameOfCategories = document.querySelectorAll("h2");
// for (const name of nameOfCategories) {
//   console.log(`Categories: ${name.textContent}`);
// }
// console.log(nameOfCategories);
// const finQuantityEl = document.querySelector("li>ul").children.length;
// console.log(`Elements: ${finQuantityEl}`);

// const ulEl = document.querySelector("#categories");
// console.log(ulEl);
// const findUl = ulEl.querySelectorAll("ul");
// console.log(findUl);
