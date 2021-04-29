// Desafio 1
function compareTrue(varBol1, varBol2) {
  // seu código aqui
  let compare = false;
  if (varBol1 === true && varBol2 === true) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(arraySplitSentence) {
  // seu código aqui
  return arraySplitSentence.split(' '); // retirado https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

// Desafio 4
function concatName(arrayConcatName) {
  // seu código aqui
  let stringReturn = `${arrayConcatName[arrayConcatName.length - 1]}, ${arrayConcatName[0]}`;
  return stringReturn;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui
  let count = 0;
  let maiorNumero = Math.max.apply(null, arrayNum); // retirado https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  for (let varredura = 0; varredura < arrayNum.length; varredura += 1) {
    if (arrayNum[varredura] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1Mouse = Math.abs(cat1 - mouse);
  let positionCat2Mouse = Math.abs(cat2 - mouse);
  let cases = 'os gatos trombam e o rato foge';
  if (positionCat1Mouse < positionCat2Mouse) {
    cases = 'cat1';
  } else if (positionCat2Mouse < positionCat1Mouse) {
    cases = 'cat2';
  }
  return cases;
}

// Desafio 8
function mult3Mult5(numMult3Mult5) {
  let num = numMult3Mult5;
  let out = '';
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      out = 'fizzBuzz';
    } else {
      out = 'fizz';
    }
  } else {
    out = 'buzz';
  }
  return out;
}

function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let arrayReturn = [];
  for (let indArrayFizzBuzz = 0; indArrayFizzBuzz < arrayFizzBuzz.length; indArrayFizzBuzz += 1) {
    if (arrayFizzBuzz[indArrayFizzBuzz] % 3 === 0 || arrayFizzBuzz[indArrayFizzBuzz] % 5 === 0) {
      arrayReturn[indArrayFizzBuzz] = mult3Mult5(arrayFizzBuzz[indArrayFizzBuzz]);
    } else {
      arrayReturn[indArrayFizzBuzz] = 'bug!';
    }
  }
  return arrayReturn;
}

// Desafio 9
// function vogal() {
//  let objeto = {
//    1: 'a',
//    2: 'e',
//    3: 'i',
//    4: 'o',
//    5: 'u'
//  }
//  return objeto;
// }
// function number () {
//  let objeto = {
//    a: '1',
//    e: '2',
//    i: '3',
//    o: '4',
//    u: '5'
//  }
//  return objeto;
// }

function change (mudChar) {
  switch (mudChar) {
    case 'a':
      mudChar = '1';
      break;
    case 'e':
      mudChar = '2';
      break;
    case 'i':
      mudChar = '3';
      break;
    case 'o':
      mudChar = '4';
      break;
    case 'u':
      mudChar = '5';
      break;
    case '1':
      mudChar = 'a';
      break;
    case '2':
      mudChar = 'e';
      break;
    case '3':
      mudChar = 'i';
      break;
    case '4':
      mudChar = 'o';
      break;
    case '5':
      mudChar = 'u';
      break;
    default:
      break;
  }
  return mudChar;
}

function encode(strEncode) {
  // seu código aqui
  let separa = strEncode.split('');
  for (let key = 0; separa.length > key; key += 1) {
    if (separa[key] === 'a' || strEncode[key] === 'e' || strEncode[key] === 'i' || strEncode[key] === 'o' || strEncode[key] === 'u') {
      separa[key] = change(strEncode[key]);
    }
  }
  return separa.join('');
}

function decode(strDecode) {
  // seu código aqui
  let separa = strDecode.split('');
  for (let key in separa) {
    if (separa[key] === '1' || separa[key] === '2' || separa[key] === '3' || separa[key] === '4' || separa[key] === '5') {
      separa[key] = change(strDecode[key]);
    }
  }
  return separa.join('');
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
