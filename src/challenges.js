// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(foguete) {
  return foguete.split(' ');
}

// Desafio 4
function concatName(Array) {
  return `${Array[Array.length - 1]}, ${Array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(Array) {
  let resultado = Array.sort((a, b) => b - a)[0];
  let soma = 0;
  Array.forEach(function(numero) {
    if (numero === resultado) {
      soma += 1;
    }
  });
  return soma;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distancia1 = mouse + cat1;
  let distancia2 = mouse + cat2;
  let resultado = '';
  if (distancia1 < distancia2) {
    resultado = 'cat1';
  } else if (distancia1 > distancia2) {
    resultado = 'cat2';
  } else if (distancia1 === distancia2) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array){
  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      array.index = 'fizz';
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      array.index = 'buzz';
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array.index = 'fizzBuzz';
    } else {
      array.index = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  string = string.split('a').join('1');
  string = string.split('e').join('2');
  string = string.split('i').join('3');
  string = string.split('o').join('4');
  string = string.split('u').join('5');
  return string;
}

function decode(string) {
  string.split('1').join('a');
  string.split('2').join('e');
  string.split('3').join('i');
  string.split('4').join('o');
  string.split('5').join('u');
  return string;
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
