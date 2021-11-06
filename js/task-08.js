// обратиться к форме и инпутам
// отменить перезагрузку страницу методом preventDefault
// проверить поля на заполнение и вывести предупреждение alert
// обьект,  имя поля - свойства, а значение - значением свойства.  свойство elements.
// очистить значения полей reset


// вариант 1


const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
 const {
    elements: { email, password }
 } = event.currentTarget;
     if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
     }
    
    const objEl = {email: email.value ,  password: password.value};
    console.log(objEl)
    // console.log(`email: ${objEl.email.value} password: ${objEl.password.value}`);
    
    event.currentTarget.reset();
}


//  вариант 2


// const loginFormRef = document.querySelector(".login-form");

// loginFormRef.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//  const {
//     elements: { email, password }
//  } = event.currentTarget;
//      if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//      }

//     const onFormResult = {};
//     const formData = new FormData(event.currentTarget)
//     formData.forEach((value, name) => {
//         onFormResult[name] = value;
//     });
//     console.log(onFormResult);
//     loginFormRef.reset();
// }












