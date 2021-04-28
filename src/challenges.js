// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 === true && valor2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(inputString) {

}
// console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(arrayStrings) {
  firstString = arrayStrings[0];
  lastString = arrayStrings[arrayStrings.length - 1];
  return (lastString +', ' + firstString);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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
