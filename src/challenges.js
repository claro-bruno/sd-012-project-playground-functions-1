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
function calcArea(base, height) { 
let calculo = (base * height) / 2; 
  return (calculo);
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strings) {
let primeiroEUltimo = strings[strings.length -1] + ', ' + [strings[0]];
  return primeiroEUltimo;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
let pontuação = ((wins * 3) + (ties * 1));
  return pontuação;
}
console.log(footballPoints(14, 8));

// Desafio 6
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
console.log(highestCount([9, 1, 2, 9, 0, 5, 7]));

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
console.log(catAndMouse(7, 2, 8));

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
function encode(stringVogais) {
  // seu código aqui
}
function decode(stringNumeros) {
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
