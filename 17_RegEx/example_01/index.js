const word = "1998-hjklw:John";

const notDigit = /[^0-9]/; // то есть если каретка стоит внутри [] - то она обозначает отрицание
const notDigit2 = /\D/;
const digit = /\d/; // = [0-9] -> одна цифра

const letter = "9";

console.log(digit.test(letter));

// [0-9] === \d
// [^0-9] === \D

// alphabetic symbols
// \w === [0-9A-Za-z_]
// \W === [^0-9A-Za-z_]

// \s - white space, tab, new line
const fullName = "John Bowie";

const regex2 = /John\sBowie/;
console.log(regex2.test(fullName));

const regex3 = /[A-Z][a-z]{3}\s[A-Z][a-z]{4}/; // если бы мы знали какая длина имени и фамилии

console.log(regex3.test(fullName));

// если символ должен быть представлен хотя бы один раз, но может и больше раз
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/; 
console.log(regex4.test("Al Key")); // true

// символы, которые показывают количество называются КВАНТОРАМИ

const cameraModel1 = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";
const cameraModel4 = "Canon 1200RD";

//сделаем выражение, которое бы подошло под оба варианта

// ? - обозначает опциональный элемент (0 или 1 вхождение)
// вопрос ставится справа от нужного символа
const regex6  = /Canon \d\d?RD?/;

console.log(regex6.test(cameraModel1));
console.log(regex6.test(cameraModel2));
console.log(regex6.test(cameraModel3));
console.log(regex6.test(cameraModel4)); // false


// * - неопределенное количество вхождений - (0 или более)

const regex7 = /\d*/; // 1 12 15 - ок "1h" - не подойдет

// Группировка

const text = "I am a programmer but you can never say. I am sure";


const regex8 = /(I) (am)/gi;

console.log(text.replace(regex8, `$2 $1`));

const fullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;

const text2 = "I am Alisher Khamidov, I am looking for Eva Dieterle";

console.log(text2.replace(fullNameReg, `$2 $1`));

const phoneNumber = "0151 52466512";

// + 49 (151) 524 665 12

const phoneRegex = /0(\d{3})\s(\d{3})(\d{3})(\d{2})/;

const maskedPhone = phoneNumber.replace(phoneRegex, `+49 ($1) $2 $3 $4`);
console.log(maskedPhone); // +49 (151) 524 665 12

// Code Wars c 8 уровня
// Leet code - java, js

