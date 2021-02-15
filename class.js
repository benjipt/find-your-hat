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
    // static method to generate field
    static generateField(height, width) {
        
    }
}


// FOR REFERENCE:
// const hat = '^';
// const hole = 'O';
// const fieldCharacter = '░';
// const pathCharacter = '*';