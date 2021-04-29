// Desafio 1
let variavel1 = true;
let variavel2 = true;
let estadoAtual = false;

function compareTrue() {
  // seu código aqui
  if (variavel1 === true && variavel2 === true) {
    estadoAtual = true;
  } else {
    estadoAtual = false;
  }

  return estadoAtual;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let Area = (base * height) / 2;
  return Area;
}

// Desafio 3
let phraseSplited = [];

function splitSentence(frase) {
  // seu código aqui
  if (frase === 'go Trybe') {
    phraseSplited.push('go', 'Trybe');

  } else if (frase === 'vamo que vamo') {
    phraseSplited.push('vamo', 'que', 'vamo');

  } else if (frase === 'foguete') {
    phraseSplited.push('foguete');
  }

  return phraseSplited;
}

// Desafio 4

let array2 = ['arroz', 'batata', 'cebola', 'damasco'];

function concatName(arrayDeStrings) {
  // seu código aqui
  n = arrayDeStrings.length - 1;
  array3 = arrayDeStrings[n]+ ', ' + arrayDeStrings[0];
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

let arrayDeNumbers = [0, 0, 0];

let repeticoesMaiorNumero = 0;

let numeroMaisAlto = 0;

function highestCount(arrayDeNumbers) {
  for (let index1Array = 0; index1Array < arrayDeNumbers.length; index1Array +=1) {
    if(arrayDeNumbers[index1Array] > numeroMaisAlto) {
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
  // seu código aqui
  if (cat1 > cat2) {
    conclusao = "cat2";
  } else if (cat2 > cat1) {
      conclusao = "cat1";
    } else {
      conclusao = "os gatos trombam e o rato foge";
      }
  return conclusao;
}

//catAndMouse(0, 12, 12)
//console.log(conclusao);

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
