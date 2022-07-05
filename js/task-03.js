const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
/*
? Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
? Используй массив объектов images для создания элементов <img> вложенных в <li>. 
? Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

? Все элементы галереи должны добавляться в DOM за одну операцию вставки.
? Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
*/
//! 1-й вариант без деструктуризации
// const ulRef = document.querySelector(".gallery");

// images.forEach((image) => {
//   ulRef.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <li>
//       <img src="${image.url}" alt = "${image.alt}" width = "300" height = "150"></img>
//     </li>`
//   );
// });
// ulRef.setAttribute("style", "display: flex;");

//! 2-й варант с деструктуризацией
// const ulRef = document.querySelector(".gallery");
// // console.log(ulRef);
// images.forEach(({ url, alt } = {}) => {
//   ulRef.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <li>
//       <img src="${url}" alt = "${alt}" width = "300" height = "150"></img>
//     </li>`
//   );
// });
// ulRef.style.display = "flex";

//! 3-й способ без insertAdjacentHTML, но с деструктуризацией и через функцию с попощью map()

// const ulRef = document.querySelector(".gallery");

// const makeListImages = ({ url, alt } = {}) => {
//   const liRef = document.createElement("li");
//   const imgRef = document.createElement("img");
//   imgRef.src = url;
//   imgRef.alt = alt;
//   imgRef.width = "300";
//   imgRef.height = "150";
//   liRef.append(imgRef);
//   return liRef;
// };

// const listImages = images.map(makeListImages);
// ulRef.append(...listImages);
// // ulRef.setAttribute("style", "display: flex;");
// ulRef.style.display = "flex";

//! 4-й способ с функцией, деструктуризацией и insertAdjacentHTML
const ulRef = document.querySelector(".gallery");

const makeGallaryCards = ({ url, alt } = {}) => {
  return `
    <li>
      <img src="${url}" alt = "${alt}" width = "300" height = "150"></img>
    </li>`;
};
const gallaryCardsArray = images.map((el) => {
  return makeGallaryCards(el);
});
ulRef.insertAdjacentHTML("afterbegin", gallaryCardsArray.join(""));
ulRef.style.display = "flex";
