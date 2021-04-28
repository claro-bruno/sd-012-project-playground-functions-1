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
function concatName() {
  // seu código aqui
}

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
