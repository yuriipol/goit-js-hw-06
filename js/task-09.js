/*
? Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на 
? button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
? Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/
const backgroundVidjet = document.querySelector(".widget");
const btnChangeColor = backgroundVidjet.querySelector(".change-color");
const textNameColor = backgroundVidjet.querySelector(".color");
const bodyChangeColor = window.document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", () => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  textNameColor.textContent = getRandomHexColor();
});
