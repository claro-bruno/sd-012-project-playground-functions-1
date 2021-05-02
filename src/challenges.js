// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(foguete) {
  return foguete.split(' ');
}

// Desafio 4
function concatName(Array) {
  return `${Array[Array.length - 1]}, ${Array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(Array) {
  let resultado = Array.sort((a, b) => b - a)[0];
  let soma = 0;
  Array.forEach( function(numero) {
    if (numero === resultado) {
      soma += 1;
    }
  });
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
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
