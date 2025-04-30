// call
sayHi();
// hoisting - поднятие
// когда вызов в коде может ыть раньше, чем само объявление

// functional declaration
function sayHi() {
  console.log("Hi!");
}

console.log(x); // hoisting var без инициализации - только объявление
var x = 10;
// const и let так не работают

// Functional expressions

// sayGoodbye(); // не сработает hoisting
const sayGoodbye = function () {
  console.log("Bye bye!");
};
sayGoodbye();

//
function butler(action) {
  action();
}

butler(sayHi);
butler(sayGoodbye);

// сосед
function neighbour (action, actionWith) {
    action(actionWith);
}

const party = function(track) {
    console.log("Tuts-tuts-tuts " + track);
};

const drill = function(item) {
    console.log("I'm drilling " + item);
}

neighbour(party, "Britney");
neighbour(party, "Rammstein");
neighbour(drill, "the wall");

// Пример калькулятор

// calculator(add, 9, 7)
// calculator(divide, 12, 4)

function calculator (operation, num1, num2) {
    return operation(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
console.log(calculator(add, 9, 7));
console.log(calculator(divide, 12, 4));


// anonymous function - анонимная функция

// пример с вычитанием
const res = calculator(function(num1, num2) {return num1-num2}, 9, 4);
console.log(res);
// стрелочная функция (типа лямбды в джаве)
const res2 = calculator((num1, num2) => num1-num2, 9, 4);

// умножение
const multiply = (num1, num2) => num1 * num2; // стрелочная функция без тела (скобки {} опущены) (строчная)

const multiply2 = (num1, num2) =>  { // стрелочная функция с телом (блочная)
    return num1 * num2;
}

// стрелочная функция, которую передали в качестве параметра в другую функцию называется
// КОЛБЕКОМ (callback)

// возведение в степень
// а в степени b

const power = (num1, num2) => num1 ** num2;

const twoPowerOfThree = calculator(power, 2, 3);
console.log(twoPowerOfThree); // 8

// pirate

function pirate(operation, item) {
    operation(item);
}

const drinkSmth = (a) => {
    console.log("I drink " + a);
};

// pitrate(drinkSmth, "rum");
// pitrate(drinkSmth, "water");

const swim = (vehicle) => {
    console.log("I roam seas in my " + vehicle);
};

pirate(swim, "ship");
pirate(drinkSmth, "rum");
pirate(swim, "barrel");
pirate(drinkSmth, "water");





