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
  let wins2 = wins * 3;
  let resultado = wins2 + ties;
  return resultado;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maior = 0;
  let vezes = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maior) {
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  } else if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 3, 2));

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
