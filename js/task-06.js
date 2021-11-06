//добавить событие фокус и блур
//в событии блур добавить проверку на правильное кол-во символов data-length 
//если кол-во правильное добавить класс valid
//если нет - добавить класс invalid

const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);


input.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    // console.log('input not focus')
    if (event.currentTarget.value.length === dataLength) {
       
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};
 // event.currentTarget - свойство "currentTarget" на объекте события ссылвется на тот элемент, которые прослушивает это событие (в данном примере на "input")

  