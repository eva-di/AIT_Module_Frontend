console.log("hello");

// методы для того чтобы получить элемент документа

const messageElement = document.getElementById("welcome-message");
const magicBtn = document.getElementById("btn-js-is-here");
const showCatBtn = document.getElementById("btn-cat");
const containerForCat = document.getElementById("container-cat");

// нужно убедиться, точ мы получили элемент в переменную, а не null
console.log(messageElement);
console.log(magicBtn);
console.log(showCatBtn);
console.log(containerForCat);

// eventListener - слушатель событий - который будет вызывать при определенных событиях - колбек
magicBtn.addEventListener("click", () => {
  console.log("Function is working"); // убедимся, что функция работает

  // innerText
  // мы обратиться к элементу -
  // и обновить значение его свойства
  messageElement.innerText = "JS is here, baby!";
});

const catImage = document.createElement("img");
console.log(catImage); // <img>

showCatBtn.addEventListener("click", () => {
  console.log("Cat is almost here!");


  // создание нового элемента
  // зададим атрибуты
  catImage.setAttribute(
    "src",
    "https://preview.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=640&crop=smart&auto=webp&s=f2b697113affe3da13283197767d071e80644ff7"
  );
  console.log(catImage);

  catImage.setAttribute("alt", "angry-cat-meme");
  console.log("После добавления аттрибутов: ", catImage);

  
  // прикрепить новый элемент - картинка к html
  // appendChild - Добавляет дочерний элемент в родителя
  
  containerForCat.appendChild(catImage);
//   catImage.style.width = "200px";
//   catImage.style.borderRadius = "20px";
//   catImage.style.margin = "25px";

  // но удобно добавить через класс
  catImage.classList.add("catImg");
});

// подключаем скрипт, не забываем про defer
// проверяем, что скрипт работает - вывод в консоль
// получаем нужные нам элементы и сохраняем в переменные
// прописываем, если нужно, eventListener - проверяем, работает ли он - выводом в консоль
// делаем то, что нам нужно
