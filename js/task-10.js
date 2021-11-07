const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEL = document.querySelector('[data-destroy]');
const divBoxesEl = document.getElementById("boxes");
const inputEl = document.querySelector('input')

btnCreateEl.addEventListener("click", getAmountEl);
btnDestroyEL.addEventListener("click", btnDestroyELBoxes);

function getAmountEl() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragmentEl = document.createDocumentFragment();
  for (let i = 0; i < amount; i+=1) {
    const size = basicSize + i * 10;
    const divEl = document.createElement("div");
    divEl.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragmentEl.appendChild(divEl);
  }
  divBoxesEl.appendChild(fragmentEl);
}
function btnDestroyELBoxes() {
  divBoxesEl.innerHTML = '';
 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; }