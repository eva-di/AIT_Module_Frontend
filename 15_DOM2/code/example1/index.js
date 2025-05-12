// const emailInput = document.getElementById("email");

// emailInput.value = "john@gmail.com"
// console.log(emailInput);

const form = document.getElementById("student-form");
const emailInput = form.elements["email"];

function onSubmit(event) {
    event.preventDefault(); // предотвратить событие по умолчанию (для формы - событие перехода на другую страницу по action)
    // console.log("submit");
    console.log(emailInput.value);
    emailInput.value = "";
    
}

form.addEventListener("submit", onSubmit);