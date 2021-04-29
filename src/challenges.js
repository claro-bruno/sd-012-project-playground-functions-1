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

let wins = 14;
let ties = 8;

function footballPoints(wins, ties) {
  
  let venceu = 3;
  let empatou = 1;
  return (wins * venceu) + (ties * empatou);
}

// Desafio 6

   let maiorV = [9, 1, 2, 3, 9, 5, 7];
   let maior = 0;

function highestCount(maiorV) {
  let maiorV = [9, 10, 2, 3, 9, 5, 7];
  let maior = maiorV[0];
  for (index = 0;index < maiorV.length; index += 1) {
    if (maiorV[index] >= maior) {
      maior = maiorV[index]
    }
    
  console.log(maior);
  }
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
