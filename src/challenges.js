// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado1;

  if (valor1 === true && valor2 === true) {
    resultado1 = true;
  } else {
    resultado1 = false;
  }
  return resultado1;
}

// Desafio 2
function calcArea(base, height) {
  let resultado2 = (base * height) / 2;
  return resultado2;
}

// Desafio 3 (Fonte: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split)
function splitSentence(sentence) {
  let resultado = sentence.split(' ');
  return (resultado);
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
