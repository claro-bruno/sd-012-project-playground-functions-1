// Desafio 1
function compareTrue(nun1, nun2) {
  if (nun1 === true && nun2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let msg = string.split(' ');
  return msg;
}

// Desafio 4
function concatName(arrayStrings) {
  let firstName = arrayStrings[0];
  let lastName = arrayStrings[arrayStrings.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vicPoints = 3;
  let tiesPoint = 1;
  let quantidade = ((wins * vicPoints) + (ties * tiesPoint));
  return quantidade;
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