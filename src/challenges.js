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
    let saldo = wins * 3 + ties * 1;
    return saldo;
}

// Desafio 6
function highestCount(mostRepeated) {
    let higher = mostRepeated[0];
    let count = 0;
    for (let highestNumber of mostRepeated) {
        if (highestNumber > higher) {
            higher = highestNumber;
        }
    }
    for (let score of mostRepeated) {
        if (score === higher) {
            count += 1;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let cat1Wins = cat1 - mouse;
    let cat2Wins = cat2 - mouse;
    if (cat1Wins < 0) {
        cat1Wins = cat1Wins * -1;
    }
    if (cat2Wins < 0) {
        cat2Wins = cat2Wins * -1;
    }

    if (cat1Wins < cat2Wins) {
        return 'cat1';
    } else if (cat2Wins < cat1Wins) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

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