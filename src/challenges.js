// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui!
  let resultado = false;
  if (valor1 === true && valor1 === valor2){
     resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = ((base * height) / 2);
  return triangleArea;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let newsentence = frase.split(' ');
  return newsentence;
}

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
