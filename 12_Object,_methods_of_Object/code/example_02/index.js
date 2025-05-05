const leon = {
  name: "Leon",
  // function() {},
  sayHello() {
    console.log(`Hello! I am ${this.name}.`); // this - весь объект
    // ``- backticks (обратные кавычки)
  }, // метод
};

leon.sayHello();

leon.name = "Leonid";
leon.sayHello();

// example circle

const circle = {
  radius: 4,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle.getArea()); // 50.26548245743669

circle.radius = 10;
console.log(circle.getArea()); // 314.1592653589793

//
const square = {
  sideLength: 10,
  getArea() {
    return this.sideLength ** 2;
  },
  getPerimeter() {
    return this.sideLength * 4;
  },
  enlargeSide() {
    this.sideLength *= 2;
  },
};

console.log(square.getArea());
console.log(square.getPerimeter());

console.log(square.getArea());

// for (let i = 0; i < 10; i++) {
//     square.enlargeSide();
//     console.log(`Сторона: ${square.sideLength}, Площадь: ${square.getArea()}`);
// }

// this - ссылка на самого себя (на сам объект)

// const getArea = square.getArea();
const { getArea } = square;
console.log(getArea()); // NaN сработала без объекта this (ветка висит отдельно от дерева)


// bind создает новую функцию, в которой в качестве this выступает указанный объект
const chessBoard = {
    sideLength: 3,
};
const getAreaOfChessboard = getArea.bind(chessBoard);
console.log(getAreaOfChessboard());
chessBoard.sideLength +=2; // если объект мутировал - функция будет рабооать с ним
console.log(getAreaOfChessboard());

console.log("\n========================");

function sayHi () {
    console.log("My name is " + this.name);
}
sayHi(); // My name is undefined

const alisher = {name: "Alisher"};
const alisherSayHi = sayHi.bind(alisher); //  получили связанную с объектом функцию
alisherSayHi(); // My name is Alisher


// apply - сразу вызывает функцию с указанным объектом в качестве this
sayHi.apply({name: "John"}); // My name is John




