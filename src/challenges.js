// Desafio 1
function compareTrue(booleano1, booleano2) {
    if (booleano1 && booleano2) {
        return true;
    };
    return false;
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
    let arrayPalavras = [];
    let palavra = '';
    for (char of sentence) {
        if (char === ' ') {
            arrayPalavras.push(palavra);
            palavra = '';
        } else {
            palavra += char;
        }
    }
    arrayPalavras.push(palavra);
    return arrayPalavras;
}

// Desafio 4
function concatName(arrayPalavras) {
    let nome = arrayPalavras[arrayPalavras.length - 1] + ', ' + arrayPalavras[0];
    return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
    let points = wins * 3 + ties * 1;
    return points;
}

// Desafio 6
function highestCount(numeros) {
    let numerosOrdenados = numeros.sort();
    let maior = numerosOrdenados[numerosOrdenados.length - 1];
    let contador = 0;
    for (num of numeros) {
        if (num === maior) {
            contador += 1;
        }
    }
    return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distMouseCat1 = Math.abs(cat1 - mouse);
    let distMouseCat2 = Math.abs(cat2 - mouse);
    if (distMouseCat1 < distMouseCat2) {
        return 'cat1';
    } else if (distMouseCat2 < distMouseCat1) {
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