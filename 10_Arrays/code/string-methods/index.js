let fruit = "apple"; // строки иммутабельны (immutable) каждый раз создается новая строка, не меняя предыдущую)

let fruitUpper = fruit.toLocaleUpperCase();
console.log(fruitUpper); // APPLE

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined // box notation == syntax
console.log(fruit.at(10)); // undefined

console.log(fruit.toLowerCase()); // apple
console.log(fruit.toUpperCase().toLowerCase()); // apple // pipeline

console.log("0".toLocaleLowerCase());
console.log("A".toLocaleLowerCase()); // a

console.log(fruit.charAt(0)); // a
console.log("==========");
console.log(fruit.charAt(10)); // пустой символ
console.log(fruit.charCodeAt(0)); // 97

// useful
// "pine" + "apple"
// concat - для объединения строк - создает новую строку из двух

const pine = "pine";
if (pine) {
    const pineapple = pine.concat(fruit);
    console.log(pineapple); // pineapple
}

const email = " John@gmail.com   "; // пользователь ввел имэйл с пробелом
console.log(email);
// trim - обрезает пробелы и переносы строк
// trim leading - слева
// trailing - в конце строки
console.log(email.trim().toLowerCase()); // john@gmail.com
console.log(email.indexOf("@")); // 5 это индекс @
console.log(email.indexOf("$")); // -1
console.log(email.trimStart()); // "John@gmail.com   "
console.log(email.trimEnd()); // " John@gmail.com"

// pad

const cake = "Cake";
console.log(cake.length);
console.log(cake.padStart(10)); // "      Cake"
console.log(cake.padStart(10).length); // 10
console.log(cake.padEnd(10, "*")); // "Cake******"

// slice

const sliceOfCake = cake.slice(3);
console.log(sliceOfCake); // "e"
console.log(cake.slice(0)); // "Cake"
console.log(cake.slice(1)); // "ake"

console.log(cake.slice(1, 3)); // "ak" // правый индекс не включительно
console.log(cake.slice(-2)); // начина с конца строки
console.log("курочка".slice(-2)); // ка
console.log("улыбочка".slice(-2)); // ка

// substring

const animal = "panda";
console.log(animal.substring(2)); // nda // если указываем один параметр - от этого индекса до конца строки
console.log("==========");
console.log(animal.substring(2, 4)); // nd - с какого по какой символ

// Выводы: slice удобнее, потому что можно работать с отрицательными индексами

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf("."); // чтобы найти индекс элемента справа

console.log(indexOfFirstDot);
console.log(indexOfLastDot);

// метод, который принимает имейл и возвращ 
// имя пользователя (до "@")
// getNameFromEmail

const email2 = "Email@email.com";
const cleanedEmail = email2.trim().toLowerCase();
const indexOfAt = cleanedEmail.indexOf("@");

function getNameFromEmail(email2) {
  if (email2) {
    return cleanedEmail.slice(0, indexOfAt);
  }
}
console.log(getNameFromEmail(email2));

function getEmailService (email2) {
    if (email2) {
        return cleanedEmail.substring(indexOfAt)
    }
}
console.log(getEmailService(email2));


function getNameFromEmail(email2) {
    const atIndex = email2.indexOf("@");
    if (atIndex < 0) {
        throw new Error("Invalid email");
    }
    return email2.slice(0, atIndex).trimStart();
}

console.log(getNameFromEmail("alisher-khamidov@gmail.com"));

try {
    console.log(getNameFromEmail("alisher-khamidov@gmail.com"));
    console.log(getNameFromEmail("alisher-khamidovgmail.com"));
    console.log("До этого кода мы не дойдем из-за ошибки");
} catch(error) {
    console.error(error);
}
console.log("Дальше");







