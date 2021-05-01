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
  return Number(wins) && Number(ties) ? ((wins * 3) + (ties * 1)) : 'invalid arguments';
}

// Desafio 6
function highestCount(arrHighest) {
  let maior = retornaMaior(arrHighest);
  return countHighest(arrHighest, maior);
}

function retornaMaior(arrHighest)
{
    let maior = 0;
    for(let index = 0; index < arrHighest.length; index += 1)
    {
        maior = arrHighest[index] > maior ? arrHighest[index] : maior;
    }
    return maior;
}

function countHighest(arrHighest, valueHight)
{
    let count = 0 ;
    for(let index=0;index < arrHighest.length; index += 1)
    {
        count += (valueHight === arrHighest[index]) ? 1 : 0;
    }
    return count;
};

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
