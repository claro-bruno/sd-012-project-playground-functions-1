// Desafio 1
function compareTrue(booleano1, booleano2) {
  let compare = true;
  if (booleano1 === true && booleano2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(arrayString) {
  let first = `${arrayString[arrayString.length - 1]}${', '}`;
  let second = arrayString[0];
  let final = `${first}${second}`;
  return final;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = 3 * wins;
  let pointsTies = 1 * ties;
  let points = pointsWins + pointsTies;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maior) {
      maior = arrayNumbers[index];
    }
  }
  let contaNum = 0;
  for (let numero = 0; numero < arrayNumbers.length; numero += 1) {
    if (maior === arrayNumbers[numero]) {
      contaNum += 1;
    }
  }
  return contaNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // restruturei a função ao contrario para diminuir 'ifs'.
  let arrayFinal = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    arrayFinal[index] = 'bug!';
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      arrayFinal[index] = 'fizzBuzz';
    } else if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 !== 0) {
      arrayFinal[index] = 'fizz';
    } else if (arrayNumeros[index] % 5 === 0 && arrayNumeros[index] % 3 !== 0) {
      arrayFinal[index] = 'buzz';
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode(stringEncode) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  stringEncode = stringEncode.replace(/a/g, '1');
  stringEncode = stringEncode.replace(/e/g, '2');
  stringEncode = stringEncode.replace(/i/g, '3');
  stringEncode = stringEncode.replace(/o/g, '4');
  stringEncode = stringEncode.replace(/u/g, '5');
  return stringEncode;
}

function decode(stringDecode) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  stringDecode = stringDecode.replace(/1/g, 'a');
  stringDecode = stringDecode.replace(/2/g, 'e');
  stringDecode = stringDecode.replace(/3/g, 'i');
  stringDecode = stringDecode.replace(/4/g, 'o');
  stringDecode = stringDecode.replace(/5/g, 'u');
  return stringDecode;
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
