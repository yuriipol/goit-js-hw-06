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
//! 1-й Способ (Oldschool)
// const ulRef = document.querySelector("#ingredients");

// for (const ingredient of ingredients) {
//   const liRef = document.createElement("li");
//   liRef.classList.add("item");
//   liRef.textContent = ingredient;
//   ulRef.append(liRef);
// }

//! 2-й способ через map()
// const ulRef = document.querySelector("#ingredients");

// const elements = ingredients.map((ingredient) => {
//   const liRef = document.createElement("li");
//   liRef.classList.add("item");
//   liRef.textContent = ingredient;
//   return liRef;
// });
// ulRef.append(...elements);

//! 3-й способ через функцию
const ulRef = document.querySelector("#ingredients");

const addIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liRef = document.createElement("li");
    liRef.classList.add("item");
    liRef.textContent = ingredient;
    return liRef;
  });
};

const elements = addIngredients(ingredients);
ulRef.append(...elements);
