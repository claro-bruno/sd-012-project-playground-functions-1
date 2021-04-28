// Desafio 1
function compareTrue(param1, param2) {
  let confirm = false;
  if (param1 === true && param2 === true) {
    confirm = true;
  }
  return confirm;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  phrase = phrase.split(' ');
  return phrase;
}

// Desafio 4
function concatName(arrayWord) {
  let lastItem = arrayWord[arrayWord.length - 1];
  let firstItem = arrayWord[0];
  let fullName = `${lastItem}, ${firstItem}`;

  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let matches = wins + ties;
  let points = 0;
  for (let indice = 1; indice <= matches; indice += 1) {
    if (indice <= wins) {
      points += 3;
    } else {
      points += 1;
    }
  }
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let repeatTimes = 0;

  for (let indice = 1; indice < arrayNumbers.length; indice += 1) {
    if (arrayNumbers[indice] > higherNumber) {
      higherNumber = arrayNumbers[indice];
    }
  }
  for (let indice = 0; indice < arrayNumbers.length; indice += 1) {
    if (higherNumber === arrayNumbers[indice]) {
      repeatTimes += 1;
    }
  }
  return repeatTimes;
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
