// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' '); 
  return arrayDeStrings;
}

// Desafio 4
function concatName(array) {
  let nomeConcatenado = array[array.length-1] + ', ' + array[0];
  return nomeConcatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount (array) {
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1] && array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (maiorNumero === array[index2]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let sub1 = mouse - cat1;
  let sub2 = mouse - cat2;
  if (Math.abs(sub1) < Math.abs(sub2)) {
    return 'cat1';
  } else if (Math.abs(sub2) < Math.abs(sub1)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
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
