// HTTP
//status

// method - метод
// GET - получить инфо
// POST - создать какой-то ресурс
// DELETE - удалить ресурс

// Структура запроса
// url
// протокол соединения https (s - защищенный ресурс, инфо шифруется)
// https://www.amazon.de/new-releases?ref_=nav_cs_newreleases
// домен                                         www.amazon.de
// путь path                                     /new-releases
// параметры запроса, query parameters (после ?) ?ref_=nav_cs_newreleases

// body - тело запроса, полезная нагрузка
// header 
// method

// по умолчанию fetch делает GET запрос
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
// fetchProducts();

function fetchProductById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
fetchProductById(2);

// POST  - используется для создания ресурса на бэкенде, часто для логина и регистрации
// попробуем сделать запрос на логин

fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: JSON.stringify({ username: "emilys", password: "emilyspass" }),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
