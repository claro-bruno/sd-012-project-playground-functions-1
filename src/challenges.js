// Desafio 1
function compareTrue(bool1, bool2) {
  let comparador = false;
  if (bool1 === true && bool2 === true) {
    comparador = true;
  } else {
    comparador = false;
  } return comparador;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  
  return area;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");

  return resultado;
}

// Desafio 4
function concatName(arrayDeString) {
  let concatenada = (arrayDeString.length - 1, arrayDeString[0]);
  
  return concatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties);
  
  return total;
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
