// JSON
// JavaScript Object Notation

// можно объект сохранить как текст

const user = {
    name: "John",
    age: 18,
    email: "john@gmail.com",
};
// формат передачи и хранения информации между клиентом и сервером - это JSON (не только для JS)

const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString); // {"name":"John","age":18,"email":"john@gmail.com"}

const userFromJSON = JSON.parse(userAsJSONString);
console.log(userFromJSON); // { name: 'John', age: 18, email: 'john@gmail.com' }
