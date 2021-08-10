// "use strict";

console.log('Запрос данных...');



setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
        name: 'PS',
        price: 2500
    };

    setTimeout(() => {
        product.status = 'ordered';
        console.log(product);
    }, 2000);

}, 2000);


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))