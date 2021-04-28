// Desafio 1
function compareTrue(varBoolA, varBoolB) {
  if ((varBoolA === true) && (varBoolB === true)) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(receivedSentence) {
  let dividedSentence;
  dividedSentence = receivedSentence.split(' ');
  return dividedSentence;
}

// Desafio 4
function concatName(receivedArray) {
  let { length } = receivedArray;
  return `${receivedArray[length - 1]}, ${receivedArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(receivedNumbers) {
  let highNumber;
  let count = 0;
  highNumber = receivedNumbers.reduce(function (a, b) {
    return Math.max(a, b);
  });
  for (let index in receivedNumbers) {
    if (receivedNumbers[index] === highNumber) {
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
