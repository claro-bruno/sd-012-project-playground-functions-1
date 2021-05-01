// Desafio 1
function compareTrue(estaDeNoite, estouComSono) {
  if (estaDeNoite && estouComSono === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base*height)/2;
  return result;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}
// Desafio 4
let array = [];
function concatName(array) {
    let primeiroItem = array[array.length -1];
    let ultimoItem = array[0]
  return `${primeiroItem}, ${ultimoItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins*3) + ties)
  return points
}

// Desafio 6
function highestCount(array2) {
  
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
