const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Helper Functions
const updatePosition = require('./helpers.js');

class Field {
    constructor(twoDArray) {
        this.field = twoDArray;
    }
    // Print Method
    print() {
        for (let i=0; i<this.field.length; i++) {
            console.log(this.field[i].join(''));
        }
    }
}

const testField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

// testField.print();

let i = 0;
let j = 0;
let playerPosition = testField.field[i][j];

let direction = prompt('Which way? ');

updatePosition(direction);
// console.log(`You are now at the coordinates: [${i}][${j}]`);
if (!playerPosition) {
    console.log('test successful');
} 
