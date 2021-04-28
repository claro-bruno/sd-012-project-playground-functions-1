// Desafio 1
function compareTrue(valorb1, valorb2) {
  return (valorb1 === true && valorb2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let arraystring = str.split(' ');
  return arraystring;
}

// Desafio 4
function concatName(arr) {
  let str = [arr[arr.length - 1], arr[0]].join(', ');
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrN) {
  let count = 0;
  for (index = 0; index < arrN.length; index += 1) {
    if (arrN[index] === Math.max(...arrN)) {
      count += 1;
    }
  }
  return count;
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
