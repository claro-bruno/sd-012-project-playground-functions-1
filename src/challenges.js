// Desafio 1
function compareTrue(param1, param2) {
  let comparation = false
  if (param1 === true && param2 === true) {
    comparation = true;
  }
  return comparation;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concatArray = [];
  concatArray.push(arrayDeStrings[arrayDeStrings.length - 1], arrayDeStrings[0]);
  concatArray = concatArray.join(",");
  return concatArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (3 * wins) + ties;
  return score;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = Number.NEGATIVE_INFINITY;
  let frequencyOfTheHighest = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === highestNumber) {
      frequencyOfTheHighest += 1;
    }
  }
  return frequencyOfTheHighest;
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
