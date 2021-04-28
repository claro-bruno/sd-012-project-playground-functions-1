// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(sentence) {
  let fraseDividida = sentence.split(' ');
  return fraseDividida;
}

// Desafio 4
function concatName(array) {
  let ultimoElemento = array[array.length - 1];
  let primeiroElemento = array[0];

  return ultimoElemento + ', ' + primeiroElemento
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3*wins;
  let empates = 1*ties;
  let totalPontos = vitorias + empates;

  return totalPontos;
}

// Desafio 6
function highestCount(array) {
  
  let maiorElemento = array[0];
  for (indice in array) {
    if (maiorElemento < array[indice]){
      maiorElemento = array[indice];
      }
    }
  let contador = 0;
  for (index = 0; index < array.length; index+= 1){
    if (array[index] === maiorElemento){
      contador += 1;}
    }
  return contador;
  }

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNum) {
  
  for (index = 0; index < arrayNum.length; index += 1){
      if (arrayNum[index]%3 === 0 && arrayNum[index]%5 !== 0) {
      arrayNum[index] = "fizz";
    } if (arrayNum[index]%3 !== 0 && arrayNum[index]%5 === 0) {
      arrayNum[index] = "buzz";
    } if (arrayNum[index]%3 === 0 && arrayNum[index]%5 === 0) {
      arrayNum[index] = "fizzBuzz";
    } else if (arrayNum[index]%3 !== 0 && arrayNum[index]%5 !== 0) {
      arrayNum[index] = "bug!";
    }
  }
  return arrayNum;
}

console.log(fizzBuzz([7, 9]));

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