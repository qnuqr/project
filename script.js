"use strict";
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 30;
    console.log(num);
}

showFirstMessage('Salem');
console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(4, 6));
// console.log(calc(8, 9));
// console.log(calc(4, 1));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
    console.log(anotherNum);

const logger = function() {
    console.log('Anuar');
};

logger();

const calc = (a, b) => {
    console.log()
}



