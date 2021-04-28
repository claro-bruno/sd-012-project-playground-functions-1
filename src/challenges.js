// Desafio 1
/*
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





// Desafio 3 - FALTA
let string = 'go trybe';

function splitSentence(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' '){
      string += ',';
    }
    
  }
}

*/



// Desafio 4
let arrayString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arrayString) {

  let finalElement = arrayString[arrayString.length-1] + ', ' + arrayString[0];

  return finalElement;
  
}

console.log(concatName(arrayString));

/*

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

*/
