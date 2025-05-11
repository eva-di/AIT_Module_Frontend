// проверяем подключился ли скрипт
console.log("check");

// получаем элементы в переменные

const infoBtn = document.getElementById("info-btn");
// console.log(infoBtn);

const removeInfoBtn = document.getElementById("remove-info-btn");


const infoMessage = document.createElement("p");
infoMessage.innerText = "This summer is not warm at all.";
// console.log(infoMessage);

// повесим eventListener
infoBtn.addEventListener("click", () => {
//   console.log("click-click"); // проверили - коммент или удаляем

document.body.append(infoMessage);

});

// слушатель для кнопки удаления
removeInfoBtn.addEventListener("click", () => {
    //удалить элемент со страницы
    // чтобы удалить элемент нужно вызвать от него метод remove

    infoMessage.remove(); // убрали элемент со страницы 
});

// в домашнем задании будет такой метод
const infoClone = infoBtn.cloneNode();
infoClone.id = "new-id-msg"; // заменили id
console.log("Склонированный узел, с измененным id", infoClone);