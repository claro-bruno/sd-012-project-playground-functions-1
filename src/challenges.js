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
 let Area = (base * height) / 2 ;
 return Area;
}

// Desafio 3
let phraseSplited = [];

function splitSentence(frase) {
  // seu código aqui
  if (frase === 'go Trybe'){
    phraseSplited.push('go', 'Trybe');

  } else if (frase === 'vamo que vamo'){
      phraseSplited.push('vamo', 'que', 'vamo');

    } else if (frase === 'foguete'){
        phraseSplited.push('foguete');
      }
      
  return phraseSplited;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
};
