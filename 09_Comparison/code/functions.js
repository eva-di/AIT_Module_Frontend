function sum(a, b = 14) {
  return a + b;
}

sum(10, 12);
console.log(sum(2)); // 2 + undefined = NaN
console.log(sum(2, 2)); // 4

// функция, которая принимает фамилию и возвращает приветствие
// Smith --> "Hi, Smith! How are you?"
// если не указана фамилия, нужно использовать "Dowson"

function greet(lastName) {
  if (!lastName) {
    lastName = "Dowson";
  }
  return "Hi, " + lastName + "! How are you?";
}
console.log(greet("Smith"));
console.log(greet());

// ===============================

function greet(lastName = "Dowson") {
  return "Hi, " + lastName + "! How are you?";
}
console.log(greet("Smith"));
console.log(greet());

// ===============================

function greet(lastName) {
  return `Hi, ${lastName || "Dowson"}! How are you?`; // обратные кавычки
}
console.log(greet("Smith"));
console.log(greet());

//===============================

function greet(lastName) {
  return `Hi, ${lastName ? lastName : "Dowson"}! How are you?`; // обратные кавычки
}
console.log(greet("Smith"));
console.log(greet());
