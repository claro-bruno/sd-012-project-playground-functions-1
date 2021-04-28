// Desafio 1
let boolean1 = false;
let boolean2 = true;

function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(boolean1, boolean2));

// Desafio 2
let base = 51;
let height = 1;

function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(base, height));

// Desafio 3
let string1 = "go trybe";
let string2 = "vamo que vamo";
let string3 = "foguete"

function splitSentence(string) {
  let split = string.split(" ");
  return split;
}
console.log(splitSentence(string1));
console.log(splitSentence(string2));
console.log(splitSentence(string3));

// Desafio 4
let stringsArray1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let stringsArray2 = ['foguete', 'não', 'tem', 'ré'];
let stringsArray3 = ['captain', 'my', 'captain'];

function concatName(array) {
  let firstName = array[0];
  let lastName = array[(array.length) - 1];
  return `${lastName}, ${firstName}`;
}
console.log(concatName(stringsArray1));
console.log(concatName(stringsArray2));
console.log(concatName(stringsArray3));

// Desafio 5
let wins = 0;
let ties = 0;

function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
}
console.log(footballPoints(wins, ties));

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
