const btnDecrement = document.querySelector('[data-action = decrement]');
const valueRef = document.querySelector('#value');
const btnIncrement = document.querySelector('[data-action = increment]');

let counterValue = 0;


btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})


btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
})







