// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(sentence) {
  let fraseDividida = sentence.split(' ');
  return fraseDividida;
}

// Desafio 4
function concatName(array) {
  let ultimoElemento = array[array.length - 1];
  let primeiroElemento = array[0];

  return ultimoElemento + ', ' + primeiroElemento
}

console.log(concatName(['captain', 'my', 'captain']))

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