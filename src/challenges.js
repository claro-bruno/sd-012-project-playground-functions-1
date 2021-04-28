// Desafio 1

let value = true;
let value2 = true;

function compareTrue(value, value2) {
  if(value === true && value2 === false || value === false && value2 === false){
    return false;
  } else {
    return true;
  };
};

console.log(compareTrue(value, value2));




// Desafio 2
let base = 51;
let height = 1;

function calcArea(base, height) {
  let operationCalcArea = (base * height) / 2
  return operationCalcArea
}

console.log(calcArea(base, height));





// Desafio 3
let string = 'go trybe';

function splitSentence(string) {
  let arraySeparada = string.split(' ');
  return arraySeparada;
}

console.log(splitSentence(string));



// Desafio 4
let arrayString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arrayString) {

  let finalElement = arrayString[arrayString.length-1] + ', ' + arrayString[0];

  return finalElement;
  
}

console.log(concatName(arrayString));



// Desafio 5
let wins = 0;
let ties = 0;

function footballPoints(wins, ties) {
  
  let points = (wins * 3) + (ties * 1);

  return points;
  
}

console.log(footballPoints(wins, ties));




// Desafio 6

let array = [0, 0, 0];

function highestCount(array) {

  let higherNumber = array[0];

  for (let index = 0; index < array.length; index += 1){
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    } else {
      higherNumber = higherNumber;
    };
  };
  
  let numberOfRepetitions = 0;
  
  for (let counter = 0; counter < array.length; counter += 1){
    if (array[counter] === higherNumber) {
      numberOfRepetitions += 1;
    }; 
  };
  
  return numberOfRepetitions;

}

console.log(highestCount(array));





// Desafio 7

let cat1 = 6;
let cat2 = 6;

function catAndMouse(cat1, cat2) {
  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat2 < cat1){
    return 'cat2';
  } else {return "os gatos trombam e o rato foge"; }; 
};

console.log(catAndMouse(cat1, cat2))




// Desafio 8 - FALTA

let array = [2, 15, 7, 9, 45];

let arrayNova = [];

for (let index = 0; index < array.length; index += 1) {
  if (array[index] % 3 = 0 && array[index] % 5 = 0){
    arrayNova.push('fizzBuzz');
  } else if (array[index] % 3 = 0) {
      arrayNova.push('fizz');
  } else if (array[index] % 5 = 0) {
      arrayNova.push('buzz');
  } else {
      arrayNova.push('bug!');
  };
  console.log(arrayNova);
};



function fizzBuzz() {
  // seu código aqui
}



// Desafio 9 FALTA

let string = 'hi there!';

let object = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

let frase = '';

for (let index = 0; index < string.length; index += 1) {
  for (let key in object) {
    if (string[index] === key){
      frase += object[key];
    } else {
      frase += string[index];
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


