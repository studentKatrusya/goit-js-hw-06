//
//
//

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes')

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function getAmount() {
  var amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const divEl = document.createElement('div');
  divEl.style.cssText = `width: ${size}px; heigth: ${size}px; background-color:  rgba( ${getRandomHexColor()}; ${getRandomHexColor()};${getRandomHexColor()}}`
  fragment.appendChild(div);}
 
}


function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}