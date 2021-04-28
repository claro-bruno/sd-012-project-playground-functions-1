// Desafio 1
let a = false;
let b = true;
console.log(compareTrue());

  // valor booleano 2 tipos (verdadeiro ou false)
  // possui o operador logico && que recebe 2 valores 
  // testar somente a condicao true e o resto retorna false <<<< 

function compareTrue() {
  if(a == true && b == false) {
    return false;
  } else if(a == false && b == false) {
    return false;
  } else if(a == true && b === true){
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

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
