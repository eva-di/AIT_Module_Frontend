/*
Homework
Задание 1
Создайте метод который принимает массив и возвращает новый! массив с теми же данными, 
но первый и последний элементы в массиве должны быть поменяны местами.

Исходный массив должен остаться неизмененным после вызова метода.
*/

console.log("============== First Solution ==============");
const array1 = [1, 2, 3, 4];

function swapFirstAndLastElements(array) {
  const newArray = [...array];

  const temp = newArray[0];

  newArray[0] = newArray[newArray.length - 1];
  newArray[newArray.length - 1] = temp;

  return newArray;
}

console.log(swapFirstAndLastElements(array1)); // [ 4, 2, 3, 1 ]
console.log(array1); //[ 1, 2, 3, 4 ]

console.log("============== Second Solution ==============");

function swapFirstAndLastElements2(arr) {
  const newArray = [...arr];

  const first = newArray.shift();
  const last = newArray.pop();

  newArray.unshift(last);
  newArray.push(first);

  return newArray;
}

console.log(swapFirstAndLastElements2(array1)); // [ 4, 2, 3, 1 ]
console.log(array1); // [ 1, 2, 3, 4 ]

/*
Задание 2
Создайте метод который принимает массив строк, ничего не возвращает. 
Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.
*/

const stringArray = ["apple", "banana", "cherry"];

function firstLetterToUpperCase(array) {
  const firstElement = array.shift();
  const capitalized =
    firstElement.charAt(0).toUpperCase() + firstElement.slice(1);
  array.unshift(capitalized);
}
firstLetterToUpperCase(stringArray);
console.log(stringArray); // [ 'Apple', 'banana', 'cherry' ]
