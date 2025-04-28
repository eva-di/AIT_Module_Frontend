// Условный оператор

// if

let age = 1;

if (age > 21) {
  // если условие истинно, то выполняется этот блок кода
  console.log("You can buy alcohol.");
} else {
  // если ложно, то вот этот
  console.log("You can not buy alcohol.");
}

if (age > 21) {
  // если условие истинно, то выполняется этот блок кода
  console.log("You can buy alcohol.");
} else if (age === 1) {
  console.log("Milk is the best option for you.");
} else {
  // если ложно, то вот этот
  console.log("You can not buy alcohol.");
}

// switch
const country = "UK";
switch (country) {
  case "UK":
    console.log("London");
    break;
  case "USA":
    console.log("Washington DC");
    break;
  default:
    console.log("Country is unknown.");
    break;
}

//
// myAge
// свитч кейс
// возраст 1 - выведем "малыш"
// возраст 2 - выведем "ползунок"
// возраст 5 - выведем "дошкольник"
// возраст 16 - выведем "подросток"
// возраст 45 - "зрелый"
// во всех остальных случаях 'отличный возраст'

let myAge = 45;
switch (myAge) {
  case 1:
    console.log("Малыш");
    break;
  case 2:
    console.log("Ползунок");
    break;
  case 5:
    console.log("Дошкольник");
    break;
  case 16:
    console.log("Подросток");
    break;
  case 45:
    console.log("Зрелый");
    break;
  default:
    console.log("Возраст не найден");
}

console.log(12 - 3 + true + "12" + Boolean(NaN));
// 9 + true + "12" + Boolean(NaN)
// 9 + 1 + "12" + Boolean(NaN)
// 10 + "12" + Boolean(NaN)
// "1012" + Boolean(NaN)
//"1012" + false
//"1012" + "false"
// "1012false"

// Функции
// кусок

// functional declaration - объявление войны
function neighbour(time) {
  if (time > 0 && time < 8) {
    console.log("Drr-drr-drr-drr");
    return "Drr-drr-drr-drr";
  }
}
neighbour(); // вызов функции - call
neighbour();
const result = neighbour(5);
console.log(result); // "Drr-drr-drr-drr"

{
  const animal = "Panda";
}
// console.log(animal); будет ошибка - так как не видит переменную внутри блока

{
  var x = 10;
}
console.log(x);
