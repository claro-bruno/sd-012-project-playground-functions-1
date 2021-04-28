// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = 0;
  if (valor1 === false && valor2 === false) {
    resultado = false;
    } if (valor2 === false || valor1 === false) {
    resultado = false;
    } else {
    resultado = true;
  }
  return resultado;
};

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  let aux = str.split(" ");
  return aux;
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(array) {
  let resultado = array[array.length -1] + ', ' + array[0];
  return resultado;
};

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete','não', 'tem', 'ré']));
console.log(concatName(['captian','my','captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins *3) + ties;
  return pontosTotais;
};

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for(index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
};

console.log(highestCount(9, 1, 2, 3, 9, 5, 7));

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
