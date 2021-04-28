// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = boolean1 && boolean2;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = [];
  let word = "";
  for (let index = 0; index <= string.length; index += 1) {
    if (string[index] === " " || index === string.length) {
      result.push(word);
      word = "";
    } else {
      word += string[index];
    }
  }
  return result;
}

// Desafio 4
function concatName(arrayStrings) {
  let firstItem;
  let lastItem;
  let result = "";
  for (let index = 0; index < arrayStrings.length; index += 1) {
    if (index === 0) {
      firstItem = arrayStrings[index];
    }
    if (index === arrayStrings.length - 1) {
      lastItem = arrayStrings[index];
    }
  }
  result = `${lastItem}, ${firstItem}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  result = winsPoints + tiesPoints;
  return result;
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
