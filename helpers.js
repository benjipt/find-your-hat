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



// Replaces fieldCharacter with pathCharacter
const extendPath = () => {

}

module.exports = updatePosition;