// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(splitString) {
  let words = splitString.split(' ');
  return words;
}
// Desafio 4
function concatName(strings) {
  let lastAndFirst = `${strings[strings.length - 1]}, ${strings[0]};`
  return lastAndFirst;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
// Desafio 6
function highestCount(array) {
  let repeticoes = 0;
  let maiorNum = 0;
  for (let num of array) {
  if (num > maiorNum) {
  maiorNum = num;
    }
  }
  for (let key of array) {
  if (key === maiorNum) {
  repeticoes += 1;
    }
  }
  return repeticoes;
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
