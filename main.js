const prompt = require('prompt-sync')({sigint: true});
// const Field = require('./class');

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
        this.locationi = 0;
        this.locationj = 0;
        this.field[0][0] = pathCharacter;
    }
    // Print Method
    print() {
        for (let i=0; i<this.field.length; i++) {
            console.log(this.field[i].join(''));
        }
    }
    // static method to generate field
    static generateField(height, width, percentage) {
        const field = new Array(height).fill(0).map(el => new Array(width));
        for (let i=0; i<height; i++) {
            for (let j=0; j<width; j++) {
                const prob = Math.random();
                field[i][j] = prob > percentage ? fieldCharacter : hole;
            }
        }
    // set hat location
    const hatLocation = {
        i: Math.floor(Math.random() * height),
        j: Math.floor(Math.random() * width)
    };
    while (hatLocation.i === 0 && hatLocation.j === 0) {
        hatLocation.i = Math.floor(Math.random() * height);
        hatLocation.j = Math.floor(Math.random() * width);
    }
    field[hatLocation.i][hatLocation.j] = hat;
    return field;
    }
}

const myField = new Field(Field.generateField(10, 10, 0.2));
myField.print();

let i = 0;
let j = 0;
let playerPosition = myField.field[i][j];

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

    playerPosition = myField.field[i][j];
}
const evalPosition = () => {
    if (!playerPosition) {
        console.log('You moved out of bounds.');
    } else if (playerPosition === hole) {
        console.log('You fell into a hole.');
    } else if (playerPosition === fieldCharacter) {
        myField.field[i].splice(j, 1, pathCharacter);
        myField.print();
        direction = prompt('Which way? ');
        updatePosition(direction);
        evalPosition();
    } else if (playerPosition === hat) {
        console.log('Congrats, you found your hat!');
    }
}

updatePosition(direction);
evalPosition();
