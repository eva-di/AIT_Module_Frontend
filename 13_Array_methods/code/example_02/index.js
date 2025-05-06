// Array.prototype

// push, pop, shift, unshift - мутирующие методы
// at - возвращает элемент (аналог бокс синтаксиса)
const fruits = ["apple", "orange", "grapes"];

console.log(fruits.at(0)); // apple
console.log(fruits[-1]); // undefined
console.log(fruits.at(-1)); // grapes

// map - создает новый массив (не мутирующий - не изменяя исходный)
const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase()); // стрелочная функция map принимает другую функцию (callback)
console.log(fruitsUpper); // [ 'APPLE', 'ORANGE', 'GRAPES' ]

const fruitLengthes = fruits.map((fruit) => fruit.length);
console.log(fruitLengthes); // [ 5, 6, 6 ]

// pipeline
// // [ "5", "6", "6" ]
const strArr = fruits.map((fruit) => fruit.length.toString());
console.log(strArr); // [ '5', '6', '6' ]

// пример использования с массивом зоопарка

const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// хочу создать массив с более толстыми версиями животных

const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));
// const americanAnimal = {...animal};
// americanAnimal.weight *= 1.3;
// return americanAnimal;

console.log(animals);
console.log(americanAnimals); // [ 390, 325, 6.5, 780 ]

const foo1 = (a) => {
  return a;
};
// === то же самое
const foo2 = (a) => a;

const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames); // [ 'Po', 'Tigrica', 'Kovalsky', 'Melman' ]

// если мы хотим изменить исходный массив - элементы в нем, то лучше использовать
// метод forEach
// метод можно использовать, чтобы выполнить операции с каждым из элементов
// добавляем в каждый объект исходного массива новое поле
// isHealthy true

animals.forEach((animal) => {
  animal.isHealthy = true;
});

console.log(animals);

// reduce
// Мы решили отвезти на экскурсию автобусную
// грузоподъемность автобуса 2500 ке
// Сможем ли мы поместить животных в автобус

let acc = 0;
for (i = 0; i < animals.length; i++) {
  acc += animals.at(i).weight;
}
console.log(acc);

const totalWeight = animals.reduce((acc, current) => acc + current.weight, 0); // 0 - начальное значение каунтера
// acc 0 current = 0 + 300
// acc 300 current 250 = 300 + 250
console.log(totalWeight);

const dishes = [
  { name: "bamboo", calories: 500 },
  { name: "meat", calories: 1600 },
  { name: "fish", calories: 1000 },
];
// Вариант 1
// калорийность всех блюд
// for (let i = 0; i < dishes.length; i++) {
//   if (dishes[i].name === "meat") {
//     dishes[i].calories *= 3;
//   }
// }

// Вариант 2
// const totalCalories = dishes.reduce(
//   (acc, dish) =>
//     acc + (dish.name === "meat" ? dish.calories * 3 : dish.calories),
//   0
// );


// Вариант 3
const totalCalories = dishes.reduce((acc, dish) => {
  if (dish.name === "meat") {
    return acc + dish.calories * 3;
  }
  return acc + dish.calories;
}, 0);
// const totalCalories = dishes.reduce((acc, dish) => acc + dish.calories, 0);
console.log(totalCalories);


const fruitsCoctail = fruits.join("-");
console.log(fruitsCoctail); // "apple-orange-grapes"


// split
const ensurance = "123.128.12412312";
const numsAsStrings = ensurance.split(".") // dilimeter - разделитель - символ, который отделяет друг от друга
console.log(numsAsStrings);  // [ '123', '128', '12412312' ]

const nums = numsAsStrings.map((element) => Number(element));
console.log(nums); // [ 123, 128, 12412312 ]

// Пингвин заболе найдем и заразим

animals.forEach((animal) => {
    if (animal.specie == "penguin") {
        animal.isHealthy = false;
    }
});
console.log(animals);

// к нам пригла эпидемстанция
// есть ли в нашем зоо больные животные
// есть ли больные?  true|| false
// some - будет возвращать истину, если предикат выполняется хотя бы у одного
const isQuarantine = animals.some((animal) => animal.isHealthy == false);
console.log(isQuarantine); // true

// Болеют ли все животные?
// every - будет возвращать истину если предикат выполняется для всех
const isEpidemy = animals.every((animal) => animal.isHealthy == false);
console.log(isEpidemy); // false

let hasKiller = animals.some((animal) => animal.specie == "tiger" && animal.name == "Killer");
console.log("hasKIller: " + hasKiller); // false


animals.push( {name: "Killer", specie: "tiger", weight: 400 });

// cyjdf ghjdthztv
hasKiller = animals.some (
    (animal) => animal.name === "Killer" && animal.specie == "tiger"
);
    console.log("hasKillr after push: " + hasKiller); // true



// Как найти и получить элемент удовлетворяющий условию
// find

// Животное с именем киллер
const killer = animals.find((animal) => animal.name === "Killer");
console.log(killer); // { name: 'Killer', specie: 'tiger', weight: 400 }

// Как найти индекс элемента, удовлетвор. условию?
const indexOfKIller = animals.findIndex((animal) => animal.name === "Killer");
console.log(indexOfKIller);

const indexOfPanda = animals.lastIndexOf((animal) => (animal.name = "Po"));

// slice

// создает копию исход массива, указываем с какого индекса по какой
// первый параметр показывает наччало - включит
// второй - не вкл, модно не указывать
// третий - необязат параметр

const shortListOfAnimals = animals.slice(2, 4);
console.log(animals);
console.log(shortListOfAnimals);

// splice
// мутирующий

const months = ["January", "February", "March", "April"];
// months.splice(2); // мутирует исходный массив
// можно указать элементы, которые мы хотим подставить вместо вырезанного куска
// второй параметр указывает сколько элементов мы вырезаем - количество
const removeMonths = months.splice(2, 2, "July", "August"); // мутирует исход массив


console.log(months); // [ 'January', 'February', 'July', 'August' ]
console.log(removeMonths); //  [ 'March', 'April' ]

const chars = ["@", "@", "@", "*", "*", "$"];
//"* - хочу заменить на "#"
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log(chars);


// findIndex, splice

animals.splice(indexOfKIller, 1); // убрали элемент по индексу
console.log(animals);

