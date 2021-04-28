// Desafio 1
function compareTrue(valorb1, valorb2) {
  return (valorb1 === true && valorb2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let arraystring = str.split(' ');
  return arraystring;
}

// Desafio 4
function concatName(arr) {
  let str = [arr[arr.length - 1], arr[0]].join(', ');
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrN) {
  let count = 0;
  for (let index = 0; index < arrN.length; index += 1) {
    if (arrN[index] === Math.max(...arrN)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } 
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrN) {
  let arrS = [];
  for (let index = 0; index < arrN.length; index += 1) {
    if (arrN[index] % 3 === 0 && arrN[index] % 5 !== 0) {
      arrS.push('fizz');
    } else if (arrN[index] % 3 !== 0 && arrN[index] % 5 === 0) {
      arrS.push('buzz');
    } else if (arrN[index] % 3 === 0 && arrN[index] % 5 === 0) {
      arrS.push('fizzBuzz');
    } else {
      arrS.push('bug!');
    }
  }
  return arrS;
}

// Desafio 9
function encode(str) {
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
}

function decode(strN) {
  strN = strN.replace(/1/g, 'a');
  strN = strN.replace(/2/g, 'e');
  strN = strN.replace(/3/g, 'i');
  strN = strN.replace(/4/g, 'o');
  strN = strN.replace(/5/g, 'u');
  return strN;
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
