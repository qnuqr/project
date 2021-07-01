'use strict';

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Salem ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользоваетль ${this.name} ушел`);
};
const anuar = new User('Anuar', 25);
const askar = new User('Askar', 32);
anuar.exit();
askar.exit();



console.log(anuar);
console.log(askar);

anuar.hello();
askar.hello();
