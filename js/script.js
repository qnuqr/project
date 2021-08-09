"use strict";

const persone = {
    name: 'Anuar',
    id: 123456,
    tel: '8729696296',
    parents: {
        m: 'Aaa',
        d: 'Ddddd'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.m = 'MMM';
console.log(clone);
console.log(persone);


console.log(JSON.parse(JSON.stringify(persone)));

