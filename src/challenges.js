// Desafio 1
function compareTrue(value1, value2) {
  /*
  &&
  receba 2 valores boleanos
  retorn true ou false
  */
  if (value1 && value2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  /*
  receba valor de base
  receba valor de altura
  return calculo da area
  formula (base * altura) / 2
   */
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(stringToSplit) {
  /*
  recebe "string"
  return = [array, de, strings] separadas
  */
  return stringToSplit.split(' ');
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(arrayOfStrings) {
  /*
  concatenacao +
  recebe = [array, de, strings]
  return "string" 'ÚLTIMO ITEM, PRIMEIRO ITEM' independente do tamanho da array
  pop()
  */
  let ultimoItem = arrayOfStrings.pop();
  let primeiroItem = arrayOfStrings[0];
  return ultimoItem + ', ' + primeiroItem;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  /*
  calculo
  recebe numero de vitorias wins = 3pontos
  receba numero de empates ties = 1ponto
  return qntde de pontos
  */
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggerNumber = arrayOfNumbers[0];
  let numberOfTimes = 0;
  for (let index = 1; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > biggerNumber) {
      biggerNumber = arrayOfNumbers[index];
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === biggerNumber) {
      numberOfTimes += 1;
    }
  }
  return numberOfTimes;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /*
  cat1 e cat2 -> mouse
  cada animal esta em uma posicao representada por um numero
  return cat mais perto
  if/else
  Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato
  mouse - cat1 = 2 / mouse - cat2 = 3
  */
  let mouseCat1 = cat1 - mouse;
  let mouseCat2 = cat2 - mouse;
  if (mouseCat1 < mouseCat2) {
    return 'cat1';
  } else if (mouseCat1 > mouseCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 6, 6));

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let newArray = [];
  let div3 = 'fizz';
  let div5 = 'buzz';
  let div35 = 'fizzBuzz';
  let divNone = 'bug!';
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 3 !== 0 && arrayOfNumbers[index] % 5 !== 0) {
      newArray.push(divNone);
    } else if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      newArray.push(div35);         
    } else if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 !== 0) {
      newArray.push(div3);
    } else if (arrayOfNumbers[index] % 3 !== 0 && arrayOfNumbers[index] % 5 === 0) {
      newArray.push(div5);
    }
  }
  return newArray;
}
console.log(fizzBuzz([15, 30, 45]));

// Desafio 9
function encode(string) {
  /* 
  recebe string e troca vogais minuscula por numero
  achar as vogais = for
  trocar se a 
  */

  // let changeVowel;

  // for (let index = 0; index < string.length; index += 1) {
  //   return string.replace(/a/, '1');
  //   return string.replace(/e/, '2');
  //   return string.replace(/i/, '3');
  //   return string.replace(/o/, '4');
  //   return string.replace(/u/, '5');
  //   changeVowel = string[index];
  //   }

  //   return string.replace(/a/, '1');
  //   return string.replace(/e/, '2');
  //   return string.replace(/i/, '3');
  //   return string.replace(/o/, '4');
  //   return string.replace(/u/, '5');
  // console.log(encode('hi there!'));

  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5

  // let vogais = 'hae!'
  // let vogais2 = vogais.replace(/a/, '1');
  // vogais.replace(/e/, '2');
  // console.log(vogais2);

function decode() {
  /* 
  recebe string contendo numeros no lugar das letras minusculas
  retorna string com vogais no lugar dos numeros
  */
}
console.log(decode('h3 th2r2!'));

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
