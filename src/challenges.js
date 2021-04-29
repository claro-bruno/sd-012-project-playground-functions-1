// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6

function highestCount(array, maiorNumero) {
  for (let contador = 0; contador < array.length; contador++) {
   maiorNumero = array[contador]
  } 
}

for (let index = 0; index < array.length; index++) {
  array[index] = maiorNumero
} return index

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
