// Desafio 1
function compareTrue(bool, boolean) {
    if (bool == true && boolean == true) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringToSplit) {
    return stringToSplit.split(' ');
}

// Desafio 4
function concatName(arrayComNomes) {
    let fullName =
        arrayComNomes[arrayComNomes.length - 1] + ', ' + arrayComNomes[0];
    return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
    let score = wins * 3 + ties * 1;
    return score;
}

// Desafio 6
function highestCount(mostRepeated) {
    // Variable to store the highest number
    let higher = mostRepeated[0];
    // Variable to count the repetition
    let count = 0;
    // Loop to search the highest number
    for (let highestNumber of mostRepeated) {
        if (highestNumber > higher) {
            higher = highestNumber;
        }
    }
    // Count the repetitions of the highest number
    for (let score of mostRepeated) {
        if (score === higher) {
            count += 1;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // Calculate the distance between catX and the mouse
    let cat1Wins = cat1 - mouse;
    let cat2Wins = cat2 - mouse;
    // Transform the distance into positive number, there's no negative distance
    if (cat1Wins < 0) {
        cat1Wins = cat1Wins * -1;
    }
    if (cat2Wins < 0) {
        cat2Wins = cat2Wins * -1;
    }
    // Conditional that returns who gets the mouse
    if (cat1Wins < cat2Wins) {
        return 'cat1';
    } else if (cat2Wins < cat1Wins) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz(fizzBuzzArray) {
    // Run the array
    // The conditionals change the array in the position 'checker' to what is written
    for (let checker = 0; checker < fizzBuzzArray.length; checker += 1) {
        if (fizzBuzzArray[checker] % 3 === 0 && fizzBuzzArray[checker] % 5 === 0) {
            fizzBuzzArray[checker] = 'fizzBuzz';
        } else if (fizzBuzzArray[checker] % 3 === 0) {
            fizzBuzzArray[checker] = 'fizz';
        } else if (fizzBuzzArray[checker] % 5 === 0) {
            fizzBuzzArray[checker] = 'buzz';
        } else {
            fizzBuzzArray[checker] = 'bug!';
        }
    }
    return fizzBuzzArray;
}

// Desafio 9
function encode(stringToEncode) {
    // A new array to put all characters inside of it
    let encodedString = [];
    // Code algorythm
    for (let index = 0; index < stringToEncode.length; index += 1) {
        if (stringToEncode[index] == 'a') {
            encodedString.push('1');
        } else if (stringToEncode[index] == 'e') {
            encodedString.push('2');
        } else if (stringToEncode[index] == 'i') {
            encodedString.push('3');
        } else if (stringToEncode[index] == 'o') {
            encodedString.push('4');
        } else if (stringToEncode[index] == 'u') {
            encodedString.push('5');
        } else {
            encodedString.push(stringToEncode[index]);
        }
        // Return the array but joining it without a comma
    }
    return encodedString.join('');
}

function decode(stringToDecode) {
    // A new array to put all characters inside of it
    let decodedString = [];
    // Decode algorythm

    for (let index = 0; index < stringToDecode.length; index += 1) {
        if (stringToDecode[index] == '1') {
            decodedString.push('a');
        } else if (stringToDecode[index] == '2') {
            decodedString.push('e');
        } else if (stringToDecode[index] == '3') {
            decodedString.push('i');
        } else if (stringToDecode[index] == '4') {
            decodedString.push('o');
        } else if (stringToDecode[index] == '5') {
            decodedString.push('u');
        } else {
            decodedString.push(stringToDecode[index]);
        }
        // Return the array but joining it without a comma
    }

    // Return the array but joining it without a comma
    return decodedString.join('');
}
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};