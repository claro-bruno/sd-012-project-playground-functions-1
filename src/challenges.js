// Desafio 1

function compareTrue(variavel1, variavel2) {
  let condicao = false;
  if (variavel1 && variavel2) {
    condicao = true;
  } else {
    condicao = false;
  }
  return condicao;
}
// console.log(compareTrue(false, true));

// Desafio 2

function calcArea(base, height) {
  let Area = (base * height) / 2;
  return Area;
}

// Desafio 3

function splitSentence(frase) {
  let phraseSplited = [];
  if (frase === 'go Trybe') {
    phraseSplited.push('go', 'Trybe');
  } else if (frase === 'vamo que vamo') {
    phraseSplited.push('vamo', 'que', 'vamo');
  } else if (frase === 'foguete') {
    phraseSplited.push('foguete');
  }
  return phraseSplited;
}

// console.log(splitSentence("foguete"))

// Desafio 4

function concatName(arrayDeStrings) {
  // seu código aqui
  let n = arrayDeStrings.length - 1;
  let array3 = arrayDeStrings[n] + ', ' + arrayDeStrings[0];
  return (array3);
}

// Desafio 5

function footballPoints(wins, ties) {
  // seu código aqui
  let Points = wins * 3 + ties;
  return Points;
}

// Desafio 6
/** Consultei o repositório do Luiz henrique para resolver essa parte.
Link do repositório: https://github.com/tryber/sd-012-project-playground-functions/pull/117
*/
function highestCount(arrayDeNumbers) {
  let repeticoesMaiorNumero = 0;
  let numeroMaisAlto = 0;
  for (let index1Array = 0; index1Array < arrayDeNumbers.length; index1Array += 1) {
    if (arrayDeNumbers[index1Array] > numeroMaisAlto) {
      numeroMaisAlto = arrayDeNumbers[index1Array];
    }
  }
  for (let index2Array = 0; index2Array < arrayDeNumbers.length; index2Array += 1) {
    if (arrayDeNumbers[index2Array] === numeroMaisAlto) {
      repeticoesMaiorNumero += 1;
    }
  }
  return repeticoesMaiorNumero;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let conclusao = '';
  // comparar o módulo da diferença para saber qual gato está mais próximo
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    conclusao = 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    conclusao = 'cat1';
  } else {
    conclusao = 'os gatos trombam e o rato foge';
  }
  return conclusao;
}

// console.log(catAndMouse(11, 10, 30));

// Desafio 8
function fizzBuzz(array5) {
  let array6 = [];
  for (let index3Array = 0; index3Array < array5.length; index3Array += 1) {
    if (((array5[index3Array]) % 3) === 0) {
      if (((array5[index3Array]) % 5) === 0) {
        array6.push('fizzBuzz');
      } else {
        array6.push('fizz');
      }
    } else if (((array5[index3Array]) % 5) === 0) {
      array6.push('buzz');
    } else {
      array6.push('bug!');
    }
  }
  return array6;
}

// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(frase2) {
  let string1 = 'aeiou';
  let string2 = '12345';
  let indice1 = 0;
  let frase3 = '';
  for (let indice2 = 0; indice2 < frase2.length; indice2 += 1) {
    if (indice1 < frase2.length) {
      frase3 = frase2.replace(string1[indice1], string2[indice1]);
      frase2 = frase3;
      indice1 += 1;
      if (indice1 > string1.length) {
        indice1 = 0;
      }
    }
  }
  return frase3;
}

// console.log(encode("hi there!"));

function decode(frase4) {
  let string3 = 'aeiou';
  let string4 = '12345';
  let indice3 = 0;
  let frase5 = '';
  for (let indice4 = 0; indice4 < frase4.length; indice4 += 1) {
    if (indice3 < frase4.length) {
      frase5 = frase4.replace(string4[indice3], string3[indice3]);
      frase4 = frase5;
      indice3 += 1;
      if (indice3 > string3.length) {
        indice3 = 0;
      }
    }
  }
  return frase4;
}
// console.log(decode("h3 th2r2"));
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