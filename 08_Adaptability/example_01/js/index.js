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






