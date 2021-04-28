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
    let saldo = (wins * 3) + (ties * 1)
    return saldo
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
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