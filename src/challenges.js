// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6

function highestCount(array) {
  let maior = -99999;
  let vezes = 0;
  for (let num of array) {
    if (maior === num) {
      vezes += 1;
    }
    if (num > maior) {
      maior = num;
      vezes = 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGatoUm = Math.abs(mouse - cat1);
  let distanciaGatoDois = Math.abs(mouse - cat2);
  if (distanciaGatoUm > distanciaGatoDois) return 'cat2';
  if (distanciaGatoUm < distanciaGatoDois) return 'cat1';
  if (distanciaGatoUm === distanciaGatoDois) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let final = [];
  for (let i = 0; i < array.length; i += 1) {
    final[i] = 'bug!';
    if (array[i] % 15 === 0) {
      final[i] = 'fizzBuzz';
    } else if (array[i] % 5 === 0) {
      final[i] = 'buzz';
    } else if (array[i] % 3 === 0) { final[i] = 'fizz'; }
  }
  return final;
}

// Desafio 9
function encode(string) {
  let str = string;
  str = str.replace(/a/g, 1);
  str = str.replace(/e/g, 2);
  str = str.replace(/i/g, 3);
  str = str.replace(/o/g, 4);
  str = str.replace(/u/g, 5);
  return str;
}

function decode(string) {
  // seu código aqui
  let str = string;
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  str = str.replace(/5/g, 'u');
  return str;
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
