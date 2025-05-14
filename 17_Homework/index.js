// Создайте функцию, которая принимает строку в формате вида 
// "1333.132.123 00" — числа могут быть любыми, но структура такая же: 
// три группы, разделённые точками и пробелом.

// Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"


function formatString(input) {
    const regex = /(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})/;
    return input.replace(regex,  `$1 $2:$3-$4`);
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"


// Задание 2 — Промис с рандомной ошибкой
// Создайте Promise, который с одинаковой вероятностью (50/50):

// либо возвращает строку "Best day of my life"
// либо выбрасывает ошибку с сообщением "Something is off"
// Затем обработайте результат с помощью .then() и .catch().


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const promise = new Promise(function(res, rej) {
   if(getRandomNumber(2)) {
      res("Best day of my life");
   } else {
    rej(new Error("Something is off"));
   }
  });

 promise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err.message);
  });
