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
        for (let i=o; i<height; i++) {
            for (let j=0; j<width; j++) {
                const prop = Math.random();
                field[i][j] = prob > percentage ? fieldCharacter : hole;
            }
        }
    }
}


// FOR REFERENCE:
// const hat = '^';
// const hole = 'O';
// const fieldCharacter = '░';
// const pathCharacter = '*';