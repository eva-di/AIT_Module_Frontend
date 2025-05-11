// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";
clonedBtn.classList.add("second-btn");

btn.addEventListener("click", () => {
  document.body.appendChild(clonedBtn);

  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});

// EventListener для второй кнопки
clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";
  btn.textContent = "Жаль!";
  btn.style.color = "white";
  btn.style.width = "174px";
});
