// Desafio 1
function compareTrue(parametro01, parametro02) {
  if (parametro01 === true && parametro02 === true) {
    return true;
  }

  return false;
}

console.log(compareTrue(true, true));
// se parametro1 é true e parametro2 é true também então irá retornar true. caso contrario será falso. //
// Desafio 2
function calcArea(base, height) {
  let total = (base * height) / 2;
  return total;
}
console.log(calcArea(51, 1));

// base x altura / 2. Depois só chamar a função //
// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

console.log(splitSentence('go Trybe'));
// Tendo como referência : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split //

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
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
