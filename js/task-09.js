//обратиться к боди,кнопке и спану
//повесить событие клик на кнопку
//написать функцию , которая добавит BackgroundColor равный функции рандомно выбирающей цвет
//вывести значение BackgroundColor текстом в спан

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackgroundColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const textBackgroundColor = document.querySelector(".color");


btnChangeColor.addEventListener('click', () => {
  bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  textBackgroundColor.textContent = bodyBackgroundColor.style.backgroundColor;
});