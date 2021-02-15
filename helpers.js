// Updates player position
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

// Evalutes player position
const evalPosition = () => {
    if (!playerPosition) {
        console.log('You move out of bounds.');
    } else if (playerPosition === hole) {
        console.log('You fell into a hole.');
    } else if (playerPosition === fieldCharacter) {
        playerPosition = pathCharacter;
        testField.print();
        let direction = prompt('Which way? ');
    } else if (playerPosition === hat) {
        console.log('Congrats, you found your hat!');
    }
}


// Replaces fieldCharacter with pathCharacter
const extendPath = () => {

}

module.exports = updatePosition, evalPosition;