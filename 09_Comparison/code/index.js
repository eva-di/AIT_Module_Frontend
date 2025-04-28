'use strict'
// number, string, bigint, boolean, symbol, undefined, null
// Object
// js -динамически типизированный язык

// java - строго типизированный

// Инициализация
const x = 10; // сразу присваиваем значение и больше не  меняем
let y = 12; // можно по-раздельности

let a, c;
a = 12; // c - будет undefined

let b = 13; // можно без let, но лучше с let
console.log(b);

// x = 20; // TypeError: Assignment to constant variable. index.js:18:3)

// Operators

// operator, operand (то, что слева и справа от оператора)
// a + b -> binary operator (бинарный оператор)
// !a => unary operator (унарный оператор)
// a ? b : c => ternary operator (тернарный оператор)

// Math
// +, -, *, /, %(модуль - целочисленный остаток от деления - remainder), **(возведение в степень)

let sum = 1 + 2; // сложение
console.log(sum);

let ex1 = "1" + 2; // конкатенация
console.log(ex1); // "12"

let ex2 = true + 4; // true => 1; false => 0 (under the hood - под капюшоном, под капотом скрытно произошло преобразование (implicitly)
console.log(ex2); // 5

let ex3 = "a" / 9;
console.log(ex3); // NaN

let ex5 = "9" - 5; // - вызвал имплицитное преобразование типа "9" -> 9 (приведение типа)
console.log(ex5);

let ex6 = 7 % 3; // 3 + 3 + 1/3
// 8 % 3 будет 2
// 8 % 4 будет 0
console.log(ex6);

const myAge = 38;
const myAgeIsEven = (myAge % 2) === 0; // odd - нечетный, even - четный
console.log(myAgeIsEven);

const ex7 = 2 ** 3; // 2 * 2 * 2
console.log(ex7);

// Logical operators (логические, булевы операторы)

// || - или  (дизъюнкция) - хотя бы один операнд истина
// && - и (Конъюнкция) - оба истинны
// ! - отрицание

// будут пытаться преобразовать в boolean

let ex8 = true && true; // true
let ex9 = true && false; // false
let ex10 = false && false; // false
let ex11 = !false; // true
let ex12 = !!false; // false

// более сложные примеры

let ex13 = !5; // false имплицитное приведение
let ex14 = !!0; // false
console.log(ex13); 
console.log(ex14);
let ex15 = Boolean(5); // эксплицитное приведение

// с || есть интересный пример:

// const myName = "Eva";
const myName = undefined;
const defaultName = "John";

const result = myName || defaultName;
console.log(result); // выбирает первое значение true

const userAge = undefined;

const age = userAge || 18; // если  userAge не указан, то age будет равен 18
console.log(age);   

// falsy values
// null, undefined, '', 0, NaN --------> false

// Операторы сравнения
// >, <, >=, <=

console.log(6 > NaN); // false

// равенство
// == - нестрогое равенство (loose equality)
// === - строгое равно (strict equality)

console.log("5" == 5); // true - если типы различается - пробует привести к одному типу и сравнить еще раз
console.log("5" === 5); // false - строгое равенство если разные типы - то дальше не сравнивает - возвращает false
// по умолчанию используем ===

console.log("Hello" === true); // false
console.log("Hello" == true); // false
console.log(String(true)); // "true"
console.log(Number("Hello")); // NaN
console.log(Number(true)); // NaN
// 1 === NaN - после преобразования

console.log("9" == 9);
console.log(Number("9")); // 9
console.log(("9" + 3) == 12); // "9" + 3 --> "93" -->93 --> 93 === 12
// исключение
console.log(undefined == null); // true !!!!!! ЗАПОМНИТЬ !!!!!!
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

// != - не строгое с приведением типа (используется крайне редко)
// !== - строгое неравенство (inequality)





























