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
const itemsRef = document.querySelectorAll(".item");
// console.log(itemsRef);
for (const item of itemsRef) {
  const title = item.querySelector("h2").textContent;
  //   console.log(title);
  const quantityItems = item.querySelectorAll("li").length;
  //   console.log(quantityItems);
  console.log(`Category:  ${title}`);
  console.log(`Elements: ${quantityItems}`);
}
