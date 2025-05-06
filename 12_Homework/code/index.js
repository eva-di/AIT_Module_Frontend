/*
Задание 1
Создайте метод, который принимает объект, а возврщает новый объект, 
в котором ключи и значения поменялись местами.

{name: "Bob"} --> {"Bob": "name"}

(вам понабится поработать с Object.values, Object.keys )
*/

function swapKeyValue(obj) {
  const keys = Object.keys(obj); // можем получить массив всех ключей [0] - выбираем первое
  const values = Object.values(obj); // можем получить массив всех значений
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
}

console.log(swapKeyValue({ name: "Bob", job: "plumber" }));



const user = { name: "Vlad", job: "plumber", vocation: "plumber"}
user["Vlad"] = "name";
user["plumber"] = "job";
user["plumber"] = "vocation"; // user["plumber"] = "job"; - сотрется, перепишется в user["plumber"] = "vocation";


console.log("\n======================================\n");
/*
Задание 2
Создайте объект дуб oak с полем высота height и полем год year и методом расти grow. 
Пусть изначальная высота дуба будет 140 см, а год будет 2025. 
При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.

Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.
*/

const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year ++;
    return `Высота: ${this.height}, Год: ${this.year}`;
  },
};

for (let i = 1; i <= 20; i++) {
  console.log(oak.grow());
}

console.log(`Дуб через 20 лет: Высота = ${oak.height} см, Год = ${oak.year}`);

/*
Задание 3 дополнительное!
Попробуйте сохранить метод grow во внешнем от объекта контексте и вызвать его с другими растениями при помощи bind или apply.
*/
const { grow } = oak;
const maple = {
  height: 100,
  year: 2000,
};


const mapleGrow = grow.bind(maple);
console.log(mapleGrow());
