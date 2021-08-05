"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(20, 2);
const long = new Rectangle(15, 4);

console.log(square.calcArea());
console.log(long.calcArea());