for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// цикл, который бы вывел в консоль числа от 100 до 0, через 2
// 100 97 94 91

function count(startNum) {
  for (let j = startNum; j >= 0; j -= 3) {
    console.log(j);
  }
}
count(12);

// для примера более сложный пример
for (let i = 100, j = 5; i > j && j < 60; i--, j++) {
  console.log(i, j);
}

// while

let i = 100;
while (i > 0) {
  console.log(i);
  i--;
}

//с помощью цикла while сделайте так,
// чтобы в массиве все животные были написаны большими буквами
// ["panda", "wolf", "fox"] -> ["PANDA", "WOLF", "FOX"];
const animals = ["panda", "wolf", "fox"];
let k = 0;

while (k < animals.length) {
  animals[k] = animals[k].toUpperCase();
  k++;
}

console.log(animals);

// for ... of

for (let animal of animals) {
    console.log(animal);
}
