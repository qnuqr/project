"use strict";
const btn = document.querySelector('.btn');
let wait,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px"; 
        }
    }
}

btn.addEventListener('click', myAnimation);
// btn.addEventListener('click', () => {
//     // const wait = setTimeout(logger, 3000);
//     wait = setInterval(logger, 500);

// });

  

// function logger() {
//     if (i === 8) {
//         clearInterval(wait);
//     }
//     console.log('Sapa');
//     i++;
// }
