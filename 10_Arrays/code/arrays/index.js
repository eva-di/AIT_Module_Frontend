// Array
// JAVA - нумерованный, одного типа значения, фиксированная длина

const students = [];
console.log(students);

const teachers = ["Sergey", "Alisher", "Igor" ];
console.log(teachers);


// еще один способ создания массива

const animals = new Array(); // пустой массив // реже, чем []
const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);
// получить из массива элемент по индексу

const firstTeacher = teachers[0];
console.log(firstTeacher);

// еще один способ получить элемент по индексу

const secondTeacher = teachers.at(1);
console.log(secondTeacher); // Alisher

const negativeTeacher = teachers.at(-2);
console.log(negativeTeacher); // Alisher

console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil' ]
// хочу добавить 4ый элемент
plants[3] = "Oak";
console.log(plants); //  [ 'Camomile', 'Dandelion', 'Basil', 'Oak' ]
// динамический массив - его длина может увеличиваться
// массив похож на List из Java

// а значит
// push - добавляет элемент в конец массива
plants.push("Cactus");
console.log(plants); [ 'Camomile', 'Dandelion', 'Basil', 'Oak', 'Cactus' ]

// хочу перезаписать последний элемент
console.log(plants.length); // 5
plants[plants.length -1] = "Rose";
console.log(plants); // [ 'Camomile', 'Dandelion', 'Basil', 'Oak', 'Rose' ]

// pop - забирает последний элемент массива и возвращает его
const rose = plants.pop();
console.log(plants); //  [ 'Camomile', 'Dandelion', 'Basil', 'Oak' ]
console.log(rose);

// [9, "asad", true] // tuple

console.log("==========1===========");
function createPersonalInfo(age, name, hairColour) {
    const personalInfo = [];
    personalInfo[0] = age;
    personalInfo[1] = name;
    personalInfo[2] = hairColour;

   return personalInfo;
  }
  
  console.log(createPersonalInfo(31, "Alisher", "brown"));

  console.log("==========2===========");
  function createPersonalInfo(age, name, hairColor) {
    return new Array(age, name, hairColor);
  }
  console.log(createPersonalInfo(31, "Alisher", "brown"));

  console.log("==========3===========");
  function createPersonalInfo(age, name, hairColor) {
    return [age, name, hairColor];
  }
  console.log(createPersonalInfo(31, "Alisher", "brown"));

  console.log("==========4===========");
  function createPersonalInfo(age, name, hairColor) {
    const personalData = [];
    personalData.push(age);
    personalData.push(name);
    personalData.push(hairColor);
    return personalData;
  }
  console.log(createPersonalInfo(31, "Alisher", "brown"));

  console.log("==================================\n");

  // shift - убирает элемент в начале
  // unshift - добавляет элемент в начало

  const cars = ["BMW"];

cars.unshift("Mercedes");
console.log(cars);

// забрать элемент из начала

const mercedes = cars.shift();
console.log(cars);

// о сложных моментах
// Почему мы сохранили в константу  и изменения массива не вызвало проблемы?

const cities = ["Berlin"];
const cities2 = cities;

cities.push("London");

console.log(cities2); // [ 'Berlin', 'London' ]

cities2.push("Milan"); 
console.log(cities); // [ 'Berlin', 'London', 'Milan' ]



// Вопрос: как сделать копию массива, чтобы он был независимым от первого массива?

const newCities = [...cities]; // spread operator

newCities.push("Hamburg");
console.log(cities); [ 'Berlin', 'London', 'Milan' ]
console.log(newCities); [ 'Berlin', 'London', 'Milan', 'Hamburg' ]


// Как мы можем создать массив из двух других

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const alphabet = [...array1, ...array2];
console.log(alphabet); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
