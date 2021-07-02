'use strict';
// 1) Обычная функция: this = window, но если use strict - undefined!!!  ******************************************************
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(8, 9);



// 2) Контекст у методов объекта - сам объект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         } 
//         shout();
//     }
    

// };
// obj.sum();

// 3) this - в конструкторах и классах - это новый экземпляр объекта
// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Salem!" + this.name);
//     };
//  }
//   let anuar = new User('Anuar', 25);

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'tomato';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

