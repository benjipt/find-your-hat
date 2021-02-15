const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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


// Testing...
const testField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

// For testing the print method
//   testField.print();
// PASSED