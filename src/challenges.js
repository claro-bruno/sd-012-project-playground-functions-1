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
  
}
console.log(highestCount(([9, 1, 2, 3, 9, 5, 7, 15])));

// Desafio 7
function catAndMouse(mause, cat1, cat2) {
  let distCat1Mause = Math.abs(cat1 - mause);
  let distCat2Mause = Math.abs(cat2 - mause);

  if ((distCat2Mause) < (distCat1Mause)) {
    return 'cat2';
  } else if (distCat1Mause < distCat2Mause) {
    return 'cat1';
  } else if (distCat1Mause === distCat2Mause) {
  return 'os gatos trombam e o rato foge';
  }
 }

// Desafio 8
function fizzBuzz(divisor) {
  let arr = [];
  for(let index = 0; index < divisor.length; index += 1){
  if (divisor[index] % 3 === 0 && divisor[index] % 5 === 0) {
    arr.push ('fizzBuzz');
  }else if (divisor[index] % 5 === 0){
    arr.push ('buzz');
  }else if(divisor[index] % 3 === 0){
    arr.push ('fizz');
  }else {
    arr.push ('bug!');
  }
}
return arr;
}

// Desafio 9
function encode(frase) {
  let frasecode = '';
  let arm1 = '';

  for (let index = 0; index < frase.length; index += 1) {
  arm1 += frase[index];
    frasecode = arm1.replace(/a/gi,'1')
    .replace(/e/gi,'2')
    .replace(/i/gi,'3')
    .replace(/o/gi,'4')
    .replace(/u/gi,'5');
  }
  return frasecode;
}
function decode(frase) {
    let frasedecode = '';
    let arm = '';
  
    for (let index1 = 0; index1 < frase.length; index1 += 1) {
    arm += frase[index1];
      frasedecode = arm.replace(/1/gi,'a')
      .replace(/2/gi,'e')
      .replace(/3/gi,'i')
      .replace(/4/gi,'o')
      .replace(/5/gi,'u');
    }
    return frasedecode;
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
