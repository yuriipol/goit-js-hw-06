/*
? Напиши скрипт создания и очистки коллекции элементов. 
? Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
? после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
? Создай функцию createBoxes(amount), которая принимает один параметр - число. 
? Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

? Размеры самого первого <div> - 30px на 30px.
? Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
? Все элементы должены иметь случайный цвет фона в формате HEX. 
? Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
? Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnClear = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = () => {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < Number(input.value); i += 1) {
    const divEl = document.createElement("div");
    const width = 30 + 10 * i;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${width}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    frag.append(divEl);
  }
  boxes.append(frag);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const destroyBoxes = () => {
  boxes.innerHTML = "";
};
btnCreate.addEventListener("click", createBoxes);

btnClear.addEventListener("click", destroyBoxes);
