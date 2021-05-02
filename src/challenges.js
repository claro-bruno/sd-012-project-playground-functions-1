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
  return `${arrayConcatName[arrayConcatName.length - 1]}, ${arrayConcatName[0]}`;
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

function encode(strEncode) {
  // seu código aqui
  let separa = strEncode;
  separa = separa.replace(/a/g, '1'); // replace('a', 'b') substitui o primeiro 'a' por 'b'
  separa = separa.replace(/e/g, '2'); // replace(/a/g, 'b') substitui todos 'a' por 'b'
  separa = separa.replace(/i/g, '3'); // replace(/a/gi, 'b') substitui todos 'a/A' por 'b'
  separa = separa.replace(/o/g, '4');
  separa = separa.replace(/u/g, '5');
  return separa;
}

function decode(strDecode) {
  // seu código aqui
  let separa = strDecode;
  separa = separa.replace(/1/g, 'a');
  separa = separa.replace(/2/g, 'e');
  separa = separa.replace(/3/g, 'i');
  separa = separa.replace(/4/g, 'o');
  separa = separa.replace(/5/g, 'u');
  return separa;
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
