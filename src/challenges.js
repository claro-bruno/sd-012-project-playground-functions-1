// Desafio 1
function compareTrue(first, second) {
  return first === true && second === true;
}

// Desafio 2
function calcArea(base, height) {
  return (Number(base) && Number(height)) ? ((base * height) / 2) : 'Not a Number';
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.length > 0 ? sentence.split(' ') : 'string empyt';
}

// Desafio 4
function concatName(arStr) {
  return arStr.length >= 1 && `${arStr[arStr.length - 1]}, ${arStr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return Number(wins) && Number(ties) && ((wins * 3) + (ties * 1));
}

function retornaMaior(arrHighest) {
  let maior = 0;
  for (let index = 0; index < arrHighest.length; index += 1) {
    maior = arrHighest[index] > maior ? arrHighest[index] : maior;
  }
  return maior;
}

function countHighest(arrHighest, valueHight) {
  let count = 0;
  for (let index = 0; index < arrHighest.length; index += 1) {
    count += (valueHight === arrHighest[index]) ? 1 : 0;
  }
  return count;
}

// Desafio 6
function highestCount(arrHighest) {
  let maior = retornaMaior(arrHighest);
  return countHighest(arrHighest, maior);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ret = '';
  let rgC1M = Math.abs((cat1 > mouse) ? (cat1 - mouse) : (mouse - cat1));
  let rgC2M = Math.abs((cat2 > mouse) ? (cat2 - mouse) : (mouse - cat2));

  if (rgC1M > rgC2M) {
    ret = 'cat2';
  } else if (rgC2M > rgC1M) {
    ret = 'cat1';
  } else {
    ret = 'os gatos trombam e o rato foge';
  }
  return ret;
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
  retornaMaior,
  countHighest,
};
