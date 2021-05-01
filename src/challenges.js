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
function retFB(value) {
  let retorno = '';
  retorno = value % 3 === 0 ? 'fizz' : retorno;
  retorno = value % 5 === 0 ? 'buzz' : retorno;
  retorno = (value % 3 === 0 && value % 5 === 0) ? 'fizzBuzz' : retorno;
  return retorno;
}

function setFizzBuss(arrfizzBuzz) {
  let arrRet = [];
  let rtFB = '';
  for (let index = 0; index < arrfizzBuzz.length; index += 1) {
    rtFB = retFB(arrfizzBuzz[index]);
    arrRet.push(rtFB.length === 0 ? 'bug!' : rtFB);
  }
  return arrRet;
}

function fizzBuzz(arFiz) {
  let arRet = setFizzBuss(arFiz);
  return arRet;
}

// Desafio 9
function encode(str) {
  let strReturn = '';
  strReturn = str.split('a').join('1');
  strReturn = strReturn.split('e').join('2');
  strReturn = strReturn.split('i').join('3');
  strReturn = strReturn.split('o').join('4');
  strReturn = strReturn.split('u').join('5');
  return strReturn;
}
function decode(str) {
  let strReturn = '';
  strReturn = str.split('1').join('a');
  strReturn = strReturn.split('2').join('e');
  strReturn = strReturn.split('3').join('i');
  strReturn = strReturn.split('4').join('o');
  strReturn = strReturn.split('5').join('u');
  return strReturn;
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
  retFB,
  setFizzBuss,
};
