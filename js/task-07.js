// обратится к инпуту и к спан
// повесить событие инпут на инпут
// написать ф-цию которая добавит стиль font-size на текст в спан
// значение range привести к строкее в пикселях
  

const inputRangeEl = document.querySelector('#font-size-control');
const inputTextEl =document.querySelector('#text')

inputRangeEl.addEventListener('input', (event) => {
    inputTextEl.style.fontSize = `${inputRangeEl.value}px`;
  
})

