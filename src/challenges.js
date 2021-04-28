// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  let operationCalcArea = (base * height) / 2
  return operationCalcArea
}

// Desafio 3
function splitSentence(fraseDesafio3) {
  let arraySeparada = fraseDesafio3.split(' ');
  return arraySeparada;
}

// Desafio 4
function concatName(arrayString) {

  let finalElement = arrayString[arrayString.length - 1] + ', ' + arrayString[0];

  return finalElement;
}

// Desafio 5
function footballPoints(wins, ties) {

  let points = (wins * 3) + (ties * 1);

  return points;
}

// Desafio 6
function highestCount(arrayDesafio6) {

  let higherNumber = arrayDesafio6[0];

  for (let index = 0; index < arrayDesafio6
.length; index += 1) {
    if (arrayDesafio6
  [index] > higherNumber) {
      higherNumber = arrayDesafio6
  [index];
    } else {
      higherNumber = higherNumber;
    };
  };

  let numberOfRepetitions = 0;

  for (let counter = 0; counter < arrayDesafio6
.length; counter += 1) {
    if (arrayDesafio6
  [counter] === higherNumber) {
      numberOfRepetitions += 1;
    };
  };

  return numberOfRepetitions;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat2 < cat1) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  };
};



// Desafio 8 - FALTA
function fizzBuzz(array8) {

let arrayNova = [];

for (let index = 0; index < array8.length; index += 1) {
  if (array8[index] % 3 === 0 && array8[index] % 5 === 0) {
    arrayNova.push('fizzBuzz');
  } else if (array8[index] % 3 === 0) {
    arrayNova.push('fizz');
  } else if (array8[index] % 5 === 0) {
    arrayNova.push('buzz');
  } else {
    arrayNova.push('bug!');
  };
  return arrayNova;
};
};



// Desafio 9 FALTA

let fraseDesafio9 = 'hi there!';

let objetodesafio9 = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

let frase = '';

for (let index = 0; index < fraseDesafio9.length; index += 1) {
  for (let key in objetodesafio9) {
    if (fraseDesafio9[index] === key) {
      frase += objetodesafio9[key];
    } else {
      frase += fraseDesafio9[index];
    };
  };
};

console.log(frase);




function encode() {

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
