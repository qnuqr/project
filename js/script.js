"use strict";

const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMinutes());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());


// console.log(now.getTimezoneOffset());


console.log(now.setHours(45));
console.log(now);
let start = new Date();

for (let i = 0; i < 100000; i ++) {
    let b = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);