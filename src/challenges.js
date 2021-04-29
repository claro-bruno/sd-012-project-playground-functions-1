// Desafio 1
function compareTrue(value1, value2) {
  let result1;

  if (value1 === true && value2 === true) {
    result1 = true;
  } else {
    result1 = false;
  }
  return result1;
}

// Desafio 2
function calcArea(base, height) {
  let result2 = (base * height) / 2;
  return result2;
}

// Desafio 3 (Fonte: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split)
function splitSentence(sentence) {
  let result3 = sentence.split(' ');
  return (result3);
}

// Desafio 4
function concatName(firstLast) {
  let firstArray = firstLast[0];
  let secondArray = firstLast[firstLast.length - 1];
  let result4 = [secondArray, firstArray];
  return (result4);
}

// Desafio 5
function footballPoints(wins, ties) {
  let result5 = (wins * 3) + (ties * 1);
  return (result5);
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
