// X Desafio 1
let x = true;
let y = false;
let resposta = x && y;
function compareTrue(x, y) {
  if (x && y) {
    return true;
  } else {
    return false;
  }
}
console.log(resposta);

// Desafio 2
let base = 10;
let height = 50;
function calcArea(base, height) {  
  return (base * height) / 2;
}
console.log((base * height) / 2);

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
let strings = ['foguete', 'não', 'tem', 'ré'];
function concatName(strings) {
  return strings[strings.length -1] + ', ' + [strings[0]];
}
console.log(strings[strings.length -1] + ', ' + [strings[0]]);

// Desafio 5
let wins = 14;
let ties = 8;
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}
console.log((wins * 3) + (ties * 1));

// Desafio 6
let valores = [9, 1, 2, 9, 9, 5, 7];

function highestCount(valores) {
  let maiorNumero = Math.max(...valores)
  let contador = 0;
  for (index = 0; index <= valores.length; index ++) {
    if (valores[index] === maiorNumero) {
      contador ++
    }
  }
  return contador;
}
console.log(highestCount(valores));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(6, 2, 8));

// Desafio 8

function fizzBuzz(array) {
  let resultado = [];
  for (index = 0; index < array.length; index ++) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
       resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
