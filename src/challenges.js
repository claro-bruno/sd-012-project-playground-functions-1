// Desafio 1
function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === valor1) {
      return true;
    } else {
      return false
    };
};

// Desafio 2
function calcArea(base, height) {
    let resultado = (base * height) / 2;
};
  return resultado;

// Desafio 3
function splitSentence(frase) {
    let resultado = frase.splint(' ');  
};
  return resultado;

// Desafio 4
function concatName(nome) { 
    return `${nome[nome.length - 1]}, ${nome[0]}`;
};

// Desafio 5
function footballPoints(win, ties) {
    let pontos = (win * 3) + (ties);
}
  return pontos;

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
