// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let primeiro = '';
  let ultimo = '';
  primeiro = array[0];
  ultimo = array[array.length - 1];
  let concatena = ultimo + ', ' + primeiro;
  return concatena;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(arr) {
  let numMaior = 0;
  let num = 0;
  for (let index = 0; index < arr.length; index += 1) {
   num += arr[index];

    for (let index2 = 0; index2 < arr.length; index += 1) {
      numMaior += arr[index2];
    }
  }
  if (num >= numMaior){
    console.log(num);
    return num;
  }
  
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mause, cat1, cat2) {
  
  if ((cat2 - mause) < (cat1 - mause)) {
    return 'cat2';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
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
