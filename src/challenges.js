// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if (valor1 === true && valor2 === true) {
    return true
} if (valor1 === true && valor2 === false) {
    return false
} if (valor1 === false && valor2 === true) {
    return false
} if (valor1 === false && valor2 === false) {
    return false
}
  }
console.log(compareTrue(false, true))

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
    return (base * heigth) / 2
  
}
console.log(calcArea(5, 2))

// Desafio 3
function splitSentence(string) {
  // seu código aqui

  return string.split(' ')
}

console.log(splitSentence("go trybe"))

// Desafio 4
function concatName(array) {
  // seu código aqui
let string3 = array[array.length -1]
let string0 = array[0]
let resultado = string3 + ', ' + string0;
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferras', 'Paolilo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
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
