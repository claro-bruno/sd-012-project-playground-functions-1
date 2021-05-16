// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b == true) {
    return true;
  } else {
    return false;
  }
}

compareTrue();

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

calcArea();

// Desafio 3
function splitSentence(setence) {
  // seu código aqui
  return setence.split(' ');
}

splitSentence('tatakae sasageyo');

// Desafio 4
function concatName(frase) {
  // seu código aqui
  // Consultei a página http://embuscadocodigo.com/codigos/javascript/length-array-em-javascript.html#:~:text=Para%20contar%20quantos%20elementos%20tem,chamamos%20o%20nome%20do%20array.
  // Para pegar o valor do ultimo item do Array;
  return frase[frase.length - 1] + ", " + frase[0];
}

concatName("minha nossa nossa nosssaa");

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

footballPoints(14, 8);

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  // Tomei como referencia o código do link a seguir.
  // https://github.com/tryber/sd-012-project-playground-functions/pull/146/commits/6a6a40ecfac3694528755ac9dd5caa0d9afa19c8
  
  let total = 0;
  let numbersSorted = numbers.sort();

  for (let index = 0; index <= numbersSorted.length - 1; index += 1) {
    if(numbersSorted[index] === numbersSorted[numbersSorted.length -1 ]){
      total +=1 ;
    }    
  }
  return total;
}

highestCount([3, 5, 9, 8, 9, 9]);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}
//
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
