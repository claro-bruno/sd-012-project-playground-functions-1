// Desafio 1
function compareTrue(booleano1, booleano2) {
  if (booleano1 === true && booleano2 === true) {
    return true;
  } else if (booleano1 === false && booleano2 === false) {
    return false;
  } else {
    return false;
  }
} //console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
} //console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(" ",);
  return arrayDeStrings;
} //console.log(splitSentence("foquete"));

// Desafio 4
function concatName(array) {
  let arrayDeStrings = (array[array.length - 1] + ',' + ' ' + array[0]);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === arrayDeStrings) {
      arrayDeStrings = array[index];
    }
    return arrayDeStrings;
  }
} //console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadeDePontos = (3 * wins) + (1 * ties);
return quantidadeDePontos;
} //console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let numeroDeVezesDoMaior = 0;
   for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  } 
  for (let index = 0; index < array.length; index += 1) {
    if ( array[index] === maiorNumero) {
      numeroDeVezesDoMaior += 1;
    }
  }    
  return numeroDeVezesDoMaior; 
  } //console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
 function catAndMouse(mouse, cat1, cat2) {
   let distanciaCat1ToMouse = Math.abs(cat1 - mouse);
   let distanciaCat2ToMouse = Math.abs(cat2 - mouse);

   if (distanciaCat2ToMouse < distanciaCat1ToMouse) {
     return "cat2";
   } else if (distanciaCat1ToMouse < distanciaCat2ToMouse) { 
     return "cat1";
   } else { 
     return "os gatos trombam e o rato foge";
   }
 }// console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(numeros) {
  let arrayDeStrings = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 ) {
      arrayDeStrings.push('fizz');  
    } else if (numeros[index] % 5 === 0) {
      arrayDeStrings.push('buzz'); 
    } else if ( numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      arrayDeStrings.push('fizBuzz');
    } else {
      arrayDeStrings.push('bug!'); 
    }
  }  
    return arrayDeStrings;
} console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
