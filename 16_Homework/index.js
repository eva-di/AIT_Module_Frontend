function validate(string) {
  const regex = /^[a-z]19\d\dborn$/;
  return regex.test(string);
}

console.log(validate("c1986born"));// true
console.log(validate("b1988born"));// true
console.log(validate("1986born")); // false — нет начальной буквы
console.log(validate("c1886born")); // false — не 19XX
console.log(validate("c1986bor")); // false — не заканчивается на 'born'

console.log("\n=============================\n");

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
console.log(sentence.replace(/javascript/gi,  "TypeScript")); // TypeScript is great. I love TypeScript. TypeScript is everywhere!