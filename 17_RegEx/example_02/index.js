// Timers
let x = 10;


setTimeout(() => {
    console.log("Hey-hey");
}, 2000); /// 2000ms === 2sec

const y = 15;
console.log(y);

setTimeout(() => {
    x = 12;
    console.log(x);
}, 1000);
console.log("x: ", x);


