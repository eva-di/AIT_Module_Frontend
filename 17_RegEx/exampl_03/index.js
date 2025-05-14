let x;

setTimeout(()=>{
    x = 10;
}, 0);

console.log(x);

const printHello = () => {
    console.log("hello");
};

const printHelloInterval = setInterval(printHello, 1500);

// остановит повторение через 10 секунд
const timeout = setTimeout(() => {
    clearInterval(printHelloInterval);
}, 10_000);