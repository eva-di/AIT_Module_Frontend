console.log("Hello, Eva!"); // нет разницы одна кавычка или 2

// объявляем переменную и присвоили значение 6

// 7 примитивных типов
// тип number
// let x = 6; монжно одновременно объявить и присвоить значение
let x; // объявляем переменную
x = 10; // присвоили значение (инициализировали)
console.log(x);

// нецелые числа тоже number
let y = 12.5;
console.log(y);

x = y; // 12.5
console.log(x);

// Тип string
x ="Ten";
console.log(x);
let name = 'Eva'; // '' = ""

// bigint - для очень крупных чисел
let z = 123123n;

// Тип undefined (пустая переменная без инициализации)
let message;
console.log(message);

// Тип null - сами присвоили, либо когда функция не нашла значение и вернула null
let secondName = null;

// Тип boolean
// true, false
// isMale, hasWife (is, has)
let isMale = true;

let isBigger = 10 > 4;
console.log(isBigger);

// константы
const m = 12;
// m = 10; // ошибка!! нельзя переписать значение переменной

const COLOR_RED = "#F00"; // лишний раз показывает то, что это фиксированные данные, которые не будут меняться никогда

//symbol
const symbol = Symbol("key");
console.log(symbol);
// в качестве уникальных ключей

// ПРИМИТИВНЫЕ ТИПЫ: number, bigint, string, boolean, undefined, null!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// не примитивный Object!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const user = {
    "email": "fghjk@mail.com"
};
console.log(user);

// Преобразование типов
// falsy values - те, которые преобразуются в false

//  явное и неявное приведение


// Явное приведение
// 10 -> "10"
let ten = 10;
let teAsString = String(ten);
console.log(teAsString);
console.log(typeof ten);
console.log(typeof teAsString);
console.log(typeof teAsString === 'string');


// Неявное приведение
let elevenAsString = 11 + ''; // '11' (автоматическая конкатенация)

// Приведение к числу
// '11' -> 11
let eleven = Number(elevenAsString);
console.log(eleven);
console.log(typeof eleven);

let wrongNumber = Number("fghjkl");
console.log(wrongNumber); // NaN - Это особое значение not a number
console.log("typeof NaN: " + typeof NaN); // Какой тип данных у NaN? -> number


if (x < Infinity) {
    console.log("blabla");
}

console.log("typeof Infinity: " + typeof Infinity); // Какой тип данных у Infinity? number

// Самое интересное это приведение к boolean
// явное
console.log(Boolean("Alisher")); // true
console.log(Boolean("12")); // true

// falsy values
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

// неявное в boolean

const myMoneyPoints = 12;
const myBrotherMoneyPoints = 0;

if (myMoneyPoints) {
    console.log("I\'m rich!"); // выполнится (преобразовалось в true)
}

if (myBrotherMoneyPoints) {
    console.log("I\'m rich!"); // недостижимый код
}

let myUser = null;
if(myUser) {
    console.log("User exists");
}

myUser = {email: "fgbh@mail.com"};

if(myUser) {
    console.log(myUser.email);

};

// Шаблонные строки

const myAge = 36;
const myName = 'Eva';

// const text = "Меня зовут" + myName + "Мне" + myAge + "лет."

const text = `Меня зовут ${myName}. Мне ${myAge} лет`; // backticks - обратные кавычки
console.log(text);












