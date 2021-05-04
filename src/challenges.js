// Desafio 1
let resposta;
let valor1 = true;
let valor2 = true;

function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
   resposta = true; 
  } else{
   resposta = false;
  }
  return resposta;
}

console.log(compareTrue(valor1, valor2));

// Desafio 2
let base = 51;
let height = 1;
let area;


function calcArea(base, height) {
  area = (base*height)/2;

  return area
}

console.log(calcArea(base, height));

// Desafio 3
let frase = "foguete";
let array = [];

function splitSentence(frase, array) {
  array = frase.split(" ");

  return array;
}

console.log(splitSentence(frase, array));

// Desafio 4
let array = ['captain', 'my', 'captain'];
let concatenado;

function concatName(array, concatenado) {
    concatenado = array[array.length - 1] + ', ' + array[0];

    return concatenado;
}

console.log(concatName(array, concatenado));

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
