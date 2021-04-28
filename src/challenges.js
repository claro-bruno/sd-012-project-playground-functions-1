/* eslint-disable space-before-blocks */
/* eslint-disable operator-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aquii
  if (valor1 === valor2 && valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = [];
  resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let concatenacao = [];
  for (let index = 0; index < arrayString.length; index += 1) {
    concatenacao = arrayString[index] + ', ' + arrayString[0];
  }
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  let resultado = wins + ties;
  return resultado;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maior = 0;
  let vezes = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > arrayNumeros[index + 1]) {
      maior = arrayNumeros[index];
      vezes = 0;
    }
    if (arrayNumeros[index] === maior) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  // seu código aqui
  if (cat1 > cat2) {
    return 'cat2';
  } else if (cat2 > cat1) {
    return 'cat1';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
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
