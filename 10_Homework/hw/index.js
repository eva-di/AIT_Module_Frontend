const animal = ["panda", "tiger", "coala", "canguroo"];

function swapFirstAndLast(arr) {
    const swappedArray = [...animal]
    const temp = swappedArray[0]; // temporary
    animal[0] = arr[arr.length -1];
    arr[arr.length -1] = temp;

    return swappedArray;

}
console.log(swapFirstAndLast(animal));
console.log(animal);


// destructuring assignment
const numbers = [1, 7, 3, 6, 5, 6];

const [, seven] = numbers;
console.log(seven);

//destructuring assignment of object - синтаксический сахар

const admin = {
    email: "admin@gmail.com",
    age: 24,
    firstName: "Administrina",
    lastName: "Tiranikus",
};

// const email = admin.email; // старый

const { age, lastName } = admin;
console.log(age, lastName);

const catPerson = {
    name: "Annamay",
    cats: ["Tom", "Garfield", "Barsik"],
};

console.log(catPerson);

// const { cats } = catPerson;
// console.log(cats);
// const [, garfield] = cats;
// console.log(garfield);

const { cats: [, garfield] } = catPerson; // но так делать не очень красиво и понятно
console.log(garfield);

const [, catName] = catPerson.cats;
console.log(catName);


console.log("=======================\n");
const arr = [[1, 2 ,3], ["Igor", "John", "Bob"], { isDrunk: true }];


const [ [ , secondNumber], [ , secondName], { isDrunk } ] = arr;

console.log(secondNumber, secondName, isDrunk); 


function capitalize(word) {

    if (word && word.length > 2) {
        return word.at(0).toUpperCase() + word.slice(1);
            } else {
                throw new Error("Invalid argument");
            }
}

function capitalizeFirstElement (arr) {
    if(arr.length) {
    arr[0] = capitalize(arr[0]);
    }
}
const fruits = ["apple", "orange"];
capitalizeFirstElement(fruits);
console.log(fruits);



