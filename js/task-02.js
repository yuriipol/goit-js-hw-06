const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
/*
?Напиши скрипт, который для каждого элемента массива ingredients:

? Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
? Добавит название ингредиента как его текстовое содержимое.
? Добавит элементу класс item.
? После чего вставит все <li> за одну операцию в список ul#ingredients.
*/
for (const ingredient of ingredients) {
  const ulRef = document.querySelector("#ingredients");
  const liRef = document.createElement("li");
  liRef.classList = "item";
  liRef.textContent = ingredient;
  // console.log(liRef);

  ulRef.append(liRef);
  // console.log(ulRef);
}
