

function User (name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
    };

anuar.age = 30;
anuar.name = "Alex";

anuar.say();
