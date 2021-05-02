// Desafio 1
function compareTrue(booleano1, booleano2) {
  if (booleano1 === true && booleano2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(arrayString) {
  let first = arrayString[arrayString.length - 1];
  let second = arrayString[0];
  let concatString = first + ', ' + second;
  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = 3 * wins;
  let pointsTies = 1 * ties;
  let points = pointsWins + pointsTies;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = 0;
  let contaNum = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] > maior) {
      maior = arrayNumbers[index];
    }
  }
  for (let numero in arrayNumbers) {
    if (arrayNumbers[numero] == maior) {
      contaNum += 1;
    }
  }
  return contaNum;
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
