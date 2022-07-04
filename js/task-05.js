/*
? Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
? подставляет его текущее значение в span#name-output. 
? Если инпут пустой, в спане должна отображаться строка "Anonymous".
*/

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("keyup", addText);

function addText() {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
  }
}
