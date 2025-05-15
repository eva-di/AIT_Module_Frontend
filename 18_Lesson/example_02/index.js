const heading = document.getElementById("heading");
const imgPirate = document.getElementById("pirate-picture");
const favouriteDrinkElement = document.getElementById("fav-drink");
const parrotsContainer = document.getElementById("parrots-container");

fetch("https://eva-di.github.io/fake-pirate/joe-sparrow.json")
  // вернул нам промис респонса - сервер вам ответит
  .then((res) => {
    // console.log(res.status);
    // console.log(res.ok);
    // console.log(res);
    if (res.status === 404) {
      throw new Error("Custom not found message");
    }
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
    // распарсит jason
    // return res.text() - вернул строку jason как есть с кавычками
  })
  .then((data) => {
    console.log(data); // ОБЯЗАТЕЛЬНО ПОСМОТРЕТЬ ЧЕМ ЯВЛЯЕТСЯ ОТВЕТ (объект, стока, еще что-то)
    // достали необходимую нам информацию с помощью десруктуризации
    const { name, url, favouriteDrink, parrots } = data; // const name = data.name;
    heading.innerText = name;
    imgPirate.src = url;
    imgPirate.style.width = "200px";
    favouriteDrinkElement.innerText = favouriteDrink;
    parrots.forEach((parrot) => {
      const parrotCard = document.createElement("li");
      parrotCard.innerText = parrot.name;
      parrotsContainer.appendChild(parrotCard);
    });
  })
  .catch((err) => {
    console.log(err.message); // Custom not found message
  });
//   .then((res) => res.json()) // мы раскрыли респонс с помощью метода jaon(), который тоже возвращ промис объекта или массива

//   .then((data) => {
//     // раскрываем сам объект
//     console.log(data);
//   });

// HTTP - протокол - правила клиент-серверного взаимодействия  (клиент = браузер)
// Статусы:
// 200-299 - положительные ответы
// 300-400 - перенаправлено (redirect)
// 400-500 - ошибки

// 200 - Success статус успех
// 400 - bad request
// 401 - Not authorized
// 403 - Access denied
// 404 - Not found
// 500 - Server error

// метод jason() - результат promise того, что должно нам прийти - затем мы еще раз его раскрываем promise then
// по умолчанию метод GET
// чтобы изменить, создать - метод POST
