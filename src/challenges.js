// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b == true) {
    return true;
  } else {
    return false;
  }
}

compareTrue();

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

calcArea();

// Desafio 3
function splitSentence(setence) {
  // seu código aqui
  return setence.split(' ');
}

splitSentence('tatakae sasageyo');

// Desafio 4
function concatName(frase) {
  // seu código aqui
  // Consultei a página http://embuscadocodigo.com/codigos/javascript/length-array-em-javascript.html#:~:text=Para%20contar%20quantos%20elementos%20tem,chamamos%20o%20nome%20do%20array.
  // Para pegar o valor do ultimo item do Array;
  return frase[frase.legth() - 1]+ ", " + frase[0];
}

concatName("minha nossa nossa nosssaa");

// Desafio 5
function footballPoints() {
  // seu código aqui
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
//
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
