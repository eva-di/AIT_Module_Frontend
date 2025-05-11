// Task 1

const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

// Task 2

const numbers = [10, 20, 30, 40];
numbers.pop();
console.log(numbers); // [ 10, 20, 30 ]

// Task 3

const colors = ["blue", "green"];
colors.unshift("red");
console.log(colors); // [ 'red', 'blue', 'green' ]

// Task 4

const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();
console.log(days); // [ 'Tuesday', 'Wednesday' ]

// Task 5

const cities = ["Paris", "London", "Berlin", "Madrid"];
const indexOfBerlin = cities
  .map((city) => city.toLowerCase())
  .indexOf("berlin");
console.log(indexOfBerlin); //  2

// Task 6

const nums = [1, 2, 3, 4];
const includesThree = nums.includes(3);
console.log(includesThree); // true

// Task 7

const letters = ["a", "b", "c", "d", "e"];
const subLetters = letters.slice(1, 4);
console.log(subLetters); // [ 'b', 'c', 'd' ]

// Task 8

const nums2 = [5, 10, 15, 20];
nums2.splice(1, 1);
console.log(nums2); // [5, 15, 20]

// Task 9

const animals = ["cat", "dog"];
animals.splice(1, 0, "parrot");
console.log(animals); // [ 'cat', 'parrot', 'dog' ]

// Task 10

const numbers2 = [40, 10, 100, 30];
numbers2.sort((a, b) => a - b);

console.log(numbers2); // [ 10, 30, 40, 100 ]

// Task 11

const arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [ 4, 3, 2, 1 ]

// Task 12

const a = [1, 2];
const b = [3, 4];

const c = a.concat(b);
console.log(c);

// Task 13

const letters2 = ["a", "b", "c"];
const newL = letters2.join("-");
console.log(newL); // a-b-c

// Task 14

const arr2 = [1, 2, 3, 2, 1];
const lastIndex = arr2.lastIndexOf(2);
console.log(lastIndex); // 3

// Task 15

const arr3 = [1, 2, 3];
while (arr3.length > 0) {
  arr3.pop();
}
console.log(arr3); // []

// Task 16

const a1 = [5, 10, 15];
const b1 = a1.slice();
console.log(b1); // [ 5, 10, 15 ]

// Task 17

const a2 = [1, 2, 3];
const b2 = a.slice();
b2.splice(0, 0, 99);
console.log(a2 != b2);
console.log(a2);
console.log(b2);

// Task 18

const nums1 = [0, 20, 30];
let sum = 0;
for (let i = 0; i < nums1.length; i++) {
  sum += nums1[i];
}
console.log(sum); // 50

// Task 19

const arr1 = [1, 2, 3, 4, 5, 6];
for (let i = arr1.length - 1; i >= 0; i--) {
  if (arr1[i] % 2 === 0) {
    arr1.splice(i, 1); 
  }
}
console.log(arr1); // [ 1, 3, 5 ]

// Task 20

const arr4 = [1, 2, 3, 4];
arr4.length = 0;
console.log(arr4); // []
