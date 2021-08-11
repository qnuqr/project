// "use strict";

//Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter //Filter 

// const names = ['Anuar', 'Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const listNames = names.filter((n) => {
//     return n.length == 5;
// });

// console.log(listNames);



// Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map // Map 

// let answers = ['AnuAr', 'AnnA', 'Hello'];
// answers = answers.map((item) => { // 2 вариант этого метода - answers.map(item => item.toLowerCase());
//     return item.toLocaleUpperCase();
// });

// console.log(answers);


// every/some // every/some // every/some // every/some // every/some // every/some // every/some // every/some // every/some // every/some 

// const someThing = [4, 5, 1];

// // console.log(someThing.some(item => typeof(item) === 'number'));

// console.log(someThing.every(item => typeof(item) === 'number'));


//reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce //reduce v//reduce //reduce 

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0      4
//                         // 4      5
//                         // 9      1
//                         // 10     3
//                         // 13     2
//                         // 15     6
//                         // 21

// const result = arr.reduce((sum, current) => sum + current, 'Summa ');

// console.log(result);

// const arr = ['apple', 'pear', 'pineapple'];
         

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);



// const obj = {
//     anuar: 'persone',
//     ann: 'persone',
//     dog: 'pet',
//     cat: 'pet'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);


// const p = new Promise((resolve, reject) => {
//     console.log('Message send!');
//     setTimeout(() => {
//         console.log('Messages accepted');
//         reject({status: 'ошибкаа!!!'});
//     }, 2000);
// });

// p
// .then((data) => {
//     return new Promise(() => {
//         console.log('Второй промис');
//     });
// })
// .then((data) => console.log(data))
// .catch(error => console.log(error))
// .finally(() => console.log('some response'));