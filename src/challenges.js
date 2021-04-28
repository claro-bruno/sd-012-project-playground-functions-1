// Desafio 1
function compareTrue(valor1, valor2) {
  let resposta = false;
  if (valor1 === true && valor2 === true) {
    resposta = true;
    return resposta;
  } else if (valor1 === false || valor2 === false) {
    resposta = false;
    return resposta;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  let resposta = 0;
  area = (base * altura) / 2;
  return area;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence() {
  // seu código aqui
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
