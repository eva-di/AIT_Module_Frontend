// Object - Объект в JavaScript — это структура данных, которая позволяет хранить пары "ключ: значение".
// Он используется для описания сущностей с набором свойств и/или методов.
// key - value

// Пример объекта:

const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("Hi!");
  },
};

console.log(person.name); // "Alice"
console.log(person["age"]); // 30
person.greet(); // hi!

// {} - Объект
// [] - массив
const user = { email: "john@gmail.com" };
const age = 18;

// user = { email: "bob@gmail.com"}; // ошибка! нельзя менять const, нельзя присвоить новое значение

// изменил значение свойства объекта
user.email = "john2@yahoo.org";

console.log(user);

// как добавить в объект новое свойство

user.eyeColor = "brown";
console.log(user);

// "hair color" - Так делать не стоит
user["hair color"] = "yellow";

console.log(user);

// dot (user.email)
// box syntax (user["hair color"] если есть символы, которые не могут быть в названии  переменной (типа пробел))

const { "hair color": color } = user; // деструктуризация, если с пробелом
console.log(color);

console.log("\n==============================\n");

const pandaName = "Po";
const favouriteFood = "bamboo";

const panda = {
  name: pandaName,
  favouriteFood, // укороченный синтаксис, если имя переменной совпадает с ключом
};
console.log(panda);

console.log("\n==============================\n");
// создайте переменную рост назовите ее bobHeight и пусть будет равна 184
// создайте объект bob с ключом  height  в котором будет лежать значение  bobHeight

const bobHeight = 184;

const bob = {
  height: bobHeight,
};

console.log(bob);


// динамический ключ - ключ, который лежит внутри переменной
const key1 = "name";
const giraffeSam = {
    name: "Sam",
    age: 7,
};
console.log(giraffeSam.key1); // undefined
console.log(giraffeSam[key1]); // giraffeSam.name

const keys = ["name", "age"];
for (let i= 0; i < keys.length; i++) {
    console.log(giraffeSam[keys[i]]);
}

// Какие у объекта есть ключи?
// Список ключей объекта

const keysOfGiraffe = Object.keys(giraffeSam);
console.log(keysOfGiraffe); // [ 'name', 'age' ]

// список значений объекта

const valuesOfGiraffe = Object.values(giraffeSam);
console.log(valuesOfGiraffe); // [ 'Sam', 7 ]

// пара ключ - значение называется ENTRY

const entries = Object.entries(giraffeSam);
console.log(entries); // [ [ 'name', 'Sam' ], [ 'age', 7 ] ] --- array nested - двухмерный массив


// freeze
const breakfast = {
    title: "omelette",
    calories: 1200,
};

Object.freeze(breakfast);
// Можем ли добавить новый ключ после заморозки?

breakfast.warm = true;

console.log(breakfast.warm); // undefined
console.log(breakfast); // { title: 'omelette', calories: 1200 }

// Можем ли мы поменять уже существующие свойства существующих ключей - НЕТ

breakfast.title = "porridge";
console.log(breakfast); // { title: 'omelette', calories: 1200 }

// seal
const dinner = {
    title: "pasta",
    calories: 500,
};
Object.seal(dinner); // { title: 'pasta', calories: 500 }

// могу ли добавить новое свойство? - нет

dinner.fat = true;

console.log(dinner); // не добавилось

// Могу ли изменить старое свойство? - Да
dinner.calories +=200;
console.log(dinner); // увеличили { title: 'pasta', calories: 700 }


// Object create

const musician = Object.create({ name: "Freddie Mercury" });
console.log(musician); // {}
console.log(musician.name); // Freddie Mercury

// поговорим про прототипное наседование позже

const address = {
    street: "Pfondorfer",
    number: 12,
};

const firma = {
    title: "Horns and Hoofs",
};

Object.assign(firma, address);

console.log(firma); // { title: 'Horns and Hoofs', street: 'Pfondorfer', number: 12 }


address.post = 10407;

console.log(firma);

// аналог того же самого --- spread operator
const personalInfo =  {
    name: "Fedor",
    
};

const medicalInfo = {
    bloodType: 1,
};

const fedor = {
    ...personalInfo, // скопировали поля из объекта personalInfo
    ...medicalInfo, // скопировали поля из объекта medicalInfo
    age: 19,  // указали ручками ключ значение
};

console.log(fedor);


// создайте метод, который принимает объект и 2 параметра типа строка
// первый из них это будущий ключ, второй - будущее значние
// ({email: "bob@gmail.com"}, eyeCOlor, "brown") ---> {"emial: "bob@gmail.com, eyeColor: "brown"}

function unify(obj, key, value) {
    return {
        ...obj,
        [key]: value,
      };
    }

    const updatedBob = unify({ email: "bob@gmail.com" }, "eyeColor", "brown");
console.log(updatedBob); 

function unify2(obj, additionalKey, additionalValue) {
    // const newObj = {...obj};
    // newObj[additionalKey] = additionalValue;
    // return newObj;

    return { ... obj, [additionalKey]: additionalValue};

  }

  const book = { title: "The Lord Of The Rings" };
  
  const newBook = unify2(book, "author", "Tolkien JR");
  
  newBook.title = "Harry Potter";
  console.log(newBook);
  console.log(book);

/*
_____________________
Методы класса Object:

.keys - узнать ключи
.values - узнать значения
.entries - узнать пры ключ: значение
.freeze - зафиксировать объект, чтобы туда не добавлялись новые ключи
.seal - нельзя добавить новые ключи, но можно поменять значение
.create - можем создавать объекты
.assign - копирует свойства одного объекта и добавляет их в другой - мутирующий метод
_____________________

*/







