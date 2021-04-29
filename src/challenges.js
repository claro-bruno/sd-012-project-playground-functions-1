// Desafio 1

let n1 = true;
let n2 = true;

function compareTrue(n1,n2) {
  
  if (n1 && n2) {
    return true;
  } 
  else {
    return false;
  }
  
}

// Desafio 2

let base = 20;
let height = 100;

function calcArea(base, height) {
  
  let resultado;
    if (resultado = (base * height) / (2)) {
      return resultado;
  }
}

// Desafio 3

let Nome = 'Tarcisio Moura';

function splitSentence(Nome) {
  let arrey
  if (arrey = Nome.split(' ',)) {
    return arrey;
  }
}

// Desafio 4

let nome = ['Tarcisio, Santos, Oliveira, Moura'];

function concatName(nome) {
  
  return nome[nome.length -1] + ', ' + nome[0];
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
