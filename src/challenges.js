// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else if (value1 === false || value2 === false) {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = sentence.split(" ");
  return arraySentence;
};

// Desafio 4
function concatName(list) {
  let arrayChange = [];
  arrayChange [0] = list.pop();
  arrayChange.push(list[0]);
  String.toString(arrayChange);
  return arrayChange;
};

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties);
  return result;
};

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
