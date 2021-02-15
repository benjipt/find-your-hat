const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Helper Functions
// const updatePosition = require('./helpers.js');
// const evalPosition = require('./helpers.js');

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
// Instance of class Field
const testField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

testField.print();

let i = 0;
let j = 0;
let playerPosition = testField.field[i][j];

let direction = prompt('Which way? ');

// Helper functions
const updatePosition = direction => {
    if (direction === 'l') {
        j--;
    } else if (direction === 'r') {
        j++;
    } else if (direction === 'u') {
        i--;
    } else if (direction === 'd') {
        i++;
    } else {
        console.log('Invalid Entry');
    }

    playerPosition = testField.field[i][j];
}
const evalPosition = () => {
    if (!playerPosition) {
        console.log('You moved out of bounds.');
    } else if (playerPosition === hole) {
        console.log('You fell into a hole.');
    } else if (playerPosition === fieldCharacter) {
        testField.field[i].splice(j, 1, pathCharacter);
        testField.print();
        direction = prompt('Which way? ');
        updatePosition(direction);
        evalPosition();
    } else if (playerPosition === hat) {
        console.log('Congrats, you found your hat!');
    }
}

updatePosition(direction);
evalPosition();

// field updates path correctly, but game terminates after two cyles.