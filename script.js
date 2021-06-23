"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

// options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(options["name"],["colors"]);



// delete options.name;

// console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свйойство ${i} имеет значения ${options[key][i]}`);
        }
    } else {
        console.log(`Свйойство ${key}, имеет значения ${options[key]}`);
    }
    
}

const actors = {
    gender: 'men',
    role: 'positive character',
    movie: 'Marvel',
    genre: {
        action:'Tranporter',
        fantasy: 'Iron man'
    }
};

console.log(Object.keys(actors).length);