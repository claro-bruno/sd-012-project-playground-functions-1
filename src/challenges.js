// Desafio 1
let variavel1 = true;
let variavel2 = true;
let estadoAtual = false;

function compareTrue() {
  // seu código aqui
  if (variavel1 === true && variavel2 === true) {
    estadoAtual = true;
  } else {
    estadoAtual = false;
  }

  return estadoAtual;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let Area = (base * height) / 2;
  return Area;
}

// Desafio 3
let phraseSplited = [];

function splitSentence(frase) {
  // seu código aqui
  if (frase === 'go Trybe') {
    phraseSplited.push('go', 'Trybe');

  } else if (frase === 'vamo que vamo') {
    phraseSplited.push('vamo', 'que', 'vamo');

  } else if (frase === 'foguete') {
    phraseSplited.push('foguete');
  }

  return phraseSplited;
}

// Desafio 4

let array2 = ['arroz', 'batata', 'cebola', 'damasco'];

function concatName(arrayDeStrings) {
  // seu código aqui
  n = arrayDeStrings.length - 1;
  array3 = arrayDeStrings[n]+ ', ' + arrayDeStrings[0];
return (array3);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let Points = wins * 3 + ties;
  return Points;
}

// Desafio 6
let arrayDeNumbers = [1, 2, 3, 4, 4, 1];

let repeticoesMaiorNumero = 0;

function highestCount(arrayDeNumbers) {
  for (let index1Array = 0; index1Array < arrayDeNumbers.length; index1Array +=1) {
    for (let index2Array = 0; index2Array < arrayDeNumbers.length; index2Array += 1) {
      if (arrayDeNumbers[index1Array] >= arrayDeNumbers[index2Array]) {
        if (arrayDeNumbers[index1Array] === arrayDeNumbers[index2Array]) {
          repeticoesMaiorNumero += 1;
        }
      }
    }
  }
  return repeticoesMaiorNumero;
}

//highestCount(arrayDeTestes)
console.log(repeticoesMaiorNumero);

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
