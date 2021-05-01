// Desafio 1
function compareTrue(booleano1, booleano2) {
  if (booleano1 === true && booleano2 === true) {
    return true;
  } else if (booleano1 === false && booleano2 === false) {
    return false;
  } else {
    return false;
  }
} console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
} console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(" ",);
  return arrayDeStrings;
} console.log(splitSentence("foquete"));

// Desafio 4
function concatName(array) {
  let arrayDeStrings = (array[array.length - 1] + ',' + ' ' + array[0]);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === arrayDeStrings) {
      arrayDeStrings = array[index];
    }
    return arrayDeStrings;
  }
} console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadeDePontos = (3 * wins) + (1 * ties);
return quantidadeDePontos;
} console.log(footballPoints(14, 8));

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
  } console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

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
 } console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(numeros) {
  let arrayDeStrings = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      arrayDeStrings.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      arrayDeStrings.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      arrayDeStrings.push('buzz');
    } else {
      arrayDeStrings.push('bug!');
    }
  }
    return arrayDeStrings;
} console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string1) {
  let vogal = string1.split('');
  for (let index = 0; index < vogal.length; index += 1) {
      if (vogal[index] === 'a'){
        vogal[index] = 1;
      } else if (vogal [index] === 'e') {
        vogal[index] = 2;
      } else if (vogal[index] === 'i') {
        vogal[index] = 3;
      } else if (vogal[index] === 'o') {
        vogal[index] = 4;
      } else if (vogal[index] === 'u') {
        vogal[index] = 5;
      }
    } return vogal.join('');
}
 console.log(encode('hi there!'));  

function decode(string2) {
  numero = string2.split('');
  for (let index = 0; index < numero.length; index +=1) {
    if (numero[index] === '1') {
      numero[index] = 'a';
    } else if (numero[index] === '2') { 
      numero[index] = 'e';
    } else if (numero[index] === '3') {
      numero[index] = 'i';
    } else if (numero[index] === '4') {
      numero[index] = 'o';
    } else if (numero[index] === '5') {
      numero[index] = 'u';
    }
  } return numero.join('');  
} console.log(decode('h3 th2r2!'));

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
