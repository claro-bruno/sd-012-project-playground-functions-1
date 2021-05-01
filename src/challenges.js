// Desafio 1
let numero1 = true;
let numero2 = false;

function compareTrue(numero1, numero2) {
  if (numero1 === true && numero2 === true) {
    return (true);
  } else {
    return (false)
  }
}

// Desafio 2

let base = 10;
let height = 50;

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(string) {
  return string.split(' ');
  // .split divide uma string em partes.
  // Evita o uso de expressões regulares.
}
//console.log(splitSentence('Waltton Coelho'));
// Desafio 4


function concatName(palavra) {

 //return string.split(' ').reverse(); => A função inverte a frase

return `${palavra[palavra.length - 1]}, ${palavra[0]}`; // A função está retornando apenas a primeira letra das palavras.

}

//console.log(concatName('Waltton Clayton Coelho Santos'));



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
