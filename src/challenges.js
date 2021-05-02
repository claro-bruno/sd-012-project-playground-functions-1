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
// function catAndMouse(mouse, cat1, cat2) {
//   let distancia1 = cat1 - mouse;
//   let distancia2 = cat2 - mouse;
//   if (distancia2 < distancia1) {
//     return 'cat2';
//   } else if (distancia1 < distancia2) {
//     return 'cat1';
//   } else if (distancia1 === distancia2) {
//     return 'os gatos trombam e o rato foge';
//   }
// }

// // Desafio 8
// function fizzBuzz(Array) {
//   let resultado = [];
//   Array.forEach(function(numero) {
//     if ((numero % 3 === 0) && (numero % 5 !== 0)) {
//       resultado.push('fizz');
//     } else if ((numero % 3 !== 0) && (numero % 5 === 0)) {
//       resultado.push('buzz');
//     } else if ((numero % 3 === 0) && (numero % 5 === 0)) {
//       resultado.push('fizzBuzz');
//     } else {
//       resultado.push('bug!');
//     }
//   });
// }

// Desafio 9
function encode(string) {
  string.replaceAll('a', '1');
  string.replaceAll('e', '2');
  string.replaceAll('i', '3');
  string.replaceAll('o', '4');
  string.replaceAll('u', '5');
}
function decode(string) {
  string.replaceAll('1', 'a');
  string.replaceAll('2', 'e');
  string.replaceAll('3', 'i');
  string.replaceAll('4', 'o');
  string.replaceAll('5', 'u');
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
