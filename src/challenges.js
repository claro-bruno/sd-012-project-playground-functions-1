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
  let higher = Math.max.apply(null,numbers);            
  
    for (let index = 0; index <= numbers.length - 1; index += 1) {
        if(numbers[index] === higher){
        total += 1 ;
        }    
    }

  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
/*
  let distCat1 = (mouse - cat1);
  let distCat2 = (mouse - cat2);

  if (distCat2 === distCat1) {
    return 'os gatos trombam e o rato foge';
  }

  if (cat1 < cat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
*/
  if (cat1 == cat2) {
    return 'os gatos trombam e o rato foge';
  }

  if (cat2 < cat1 ) {
    return 'cat2';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}
//
// Desafio 9
function encode() {
  // seu código aqui
  let newText = texto.replace(/a/g, '1');
            
    newText = newText.replace(/e/g, '2');
    newText = newText.replace(/i/g, '3');
    newText = newText.replace(/o/g, '4');
    newText = newText.replace(/u/g, '5');
    
  return newText;
}
function decode() {
  // seu código aqui
  let newText = texto.replace(/1/g, 'a');
              
    newText = newText.replace(/2/g, 'e');
    newText = newText.replace(/3/g, 'i');
    newText = newText.replace(/4/g, 'o');
    newText = newText.replace(/5/g, 'u');

  return newText;
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
