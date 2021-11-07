const input = document.querySelector('#name-input');

const nameTitleSpan = document.querySelector('#name-output')


input.addEventListener('input', onInputChange);

function onInputChange(event)  {
    nameTitleSpan.textContent = event.currentTarget.value;
    if (nameTitleSpan.textContent === '') {
        nameTitleSpan.textContent = 'Anonymous';
    }
}
