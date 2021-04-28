// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === false || valor1 == false && valor2 === true) {
    return false;
  } else if (valor1 === false && valor2 === false) {
    return false;
  } else {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(" "); 
  return arrayDeStrings;
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array[0];
  let segundoItem = array[array.length-1];
  return (segundoItem+', '+primeiroItem+'.');
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins*3)+(ties*1);
  return pontos;
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
