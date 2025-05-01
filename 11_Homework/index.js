/*
Задание 1
🏠

Используя деструктуризацию объекта, получите в отдельные переменные цвет стен, и адрес.
*/

const house = {
  adress: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const { wallColor } = house;
const { adress } = house;
console.log(wallColor, adress);

/*
  Задание 2
🍏 Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix. 
Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, 
слева к которым присоединен префикс.

Исходный массив должен остаться неизменным.

Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
  */

const stringArray = ["apple", "orange"];

function prefixConcat(arr, prefix) {
  const newArray = [...stringArray];
  let i = 0;

  if (newArray) {
    while (i < newArray.length) {
      newArray[i] = prefix + newArray[i];
      i++;
    }
    return newArray;
  }
}
console.log(prefixConcat(stringArray, "pine"));
console.log(stringArray);


/*
Задание 3
Создайте функцию gardener, которая принимает в себя два параметра: операцию и предмет, 
на который эта операция будет направлена.

Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " 
плюс название конкретного цветка.

Вызовите функцию gardener c параметрами: функция поливать цветок, 'rose'.

Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾
*/

function gardener (operation, item) {
    operation(item);
}

const water = function (item) {
    console.log("I water this " + item);
}

const cut = function(item) {
    console.log("I cut bushes with " + item);
}

const kill = function(actionWith) {
console.log("I killed Ms MArple with " + actionWith);
}

gardener(water, "rose");
gardener(cut, "shears");
gardener(kill, "shears");


