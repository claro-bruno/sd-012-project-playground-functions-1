// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = base * height / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(array) {
  let firstLast = `${array[array.length-1]}, ${array[0]}`;
  return firstLast;
}

// Desafio 5
function footballPoints(wins, ties) {

}

// Desafio 6
function highestCount(numbers) {

  }
  return repeatTimes
}

// Desafio 7
function catAndMouse() {

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
