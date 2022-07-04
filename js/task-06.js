/*
? Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
? проверяет его содержимое на правильное количество введённых символов.
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
?Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
?Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
?Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/
const refs = {
  input: document.querySelector("#validation-input"),
};
const totalLength = refs.input.getAttribute("data-length");
// console.log(totalLength);
const intTotallenght = parseInt(totalLength, 10);
// console.log(intTotallenght);

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);

function onInputFocus() {
  console.log("Повесил фокус");
}
function onInputBlur() {
  console.log("Импут потерял фокус - событие blur");
  if (refs.input.value.length === intTotallenght) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else if (refs.input.value.length === 0) {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  } else if (
    refs.input.value.length !== intTotallenght &&
    refs.input.value.length !== 0
  ) {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}
