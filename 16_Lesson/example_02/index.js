// Regular expressions
//RegEx

// Найти фрагмент строки, подходящей под описание
// Можем заменить все вхождения на другую строку
// Проверить, соответствует ли строка шаблону - регулярному выражению - для валидации

const text1 = "Hello, Alisher! Oh, Anna, you are also here, well hello there!";

console.log(text1.match(/Hello/)); // литерал рег выр
console.log(text1.replace(/Hello/, "Good afternoon"));

// Что такое флаги? i, g
const text2 = "Apple Orange apple orange Apple Orange apple orange";
const newText2 = text2.replace(/Apple/, "banana");
// без флага заменяется только первое вхождение
// Apple Orange banana orange Apple Orange apple orange
console.log(newText2);
console.log(text2.replace(/apple/g, "banana"));

// флаг i - делает нечувствительным к регистру
// banana Orange banana orange banana Orange banana orange
console.log(text2.replace(/apple/gi, "banana"));

// проверить, что выражение состоит из буквы и нескольких чисел
// a87
// b675
// c99
//x88y - не подойдет
const  code = "Cakea87";
console.log(code.match(/.87/)); // точка соответствует любому символу - метасимвол для чего угодно

// проверим, начинается ли выражение со слова Cake
console.log(code.match(/^Cake/)); // каретка )(^) - обозначает начало строки

const example = "Hello, John!";
console.log(example.match(/^John/)); // null - в начале строки нету указанного выражения 

// мы можем проверить, находится ли слово в конце строки - значок $
console.log(example.match(/John!$/)); // [ 'John!', index: 7, input: 'Hello, John!', groups: undefined ]

// хочу проверить, что выражение из 4 символов начиналось на t и заканчивалось на 8

const example2 = "tuh8";
const example3 = "tuh9"; // не пройдет

console.log(example2.match(/^t..8$/)); // ok
console.log(example3.match(/^t..8$/)); /// null

// найти точку как знак препинания
// aaa.aaa.aaa
const example4 = "aaa.aaa.aaa";
// экранировать точку с пом обратного \
// Другие спец символы тоже придется экранировать типа $, + и ^
console.log(example4.match(/aaa\.aaa\.aaa/));

// Как обознач буквенные символы - []
// Хочу, чтобы слово начиналось с букв h, l или b?
// hate, late, bate - ok
// wate- не ок

const example5 = "hate";
console.log(example5.match(/[hlb]ate/)); // любая из 3 подойдет в кач первого символа
console.log("wate".match(/[hlb]ate/)); // null

// слово должно начинаться на букву F, яа втором месте должно быть буква а или цифра 6
// на третьем месте любой символ, слово должно закончиться на любую строчную букву

const word = "F6mv"; // ok

console.log(word.match(/^F[a6].[a-z]$/)); // ok

// [A-Za-z] - все буквы

// [A-Za-z0-9] - буква или цифра



