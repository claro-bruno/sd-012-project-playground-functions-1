// Desafio 1

let valor1 = 5;
let valor2 = 12;

function compareTrue() {
  let verificador = false;
  if (valor1 > 0 && valor2 > 0){
    verificador = true;
  } else {
    verificador = false;
  }
  return verificador
};



// Desafio 2
let base;
let height;

function calcArea(base,height) {
  return (base * height) / 2;
  
}

console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));


// Desafio 3
let string;

function splitSentence(string) {
  let array = string.split(' ');
  return array
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));



// Desafio 4

function concatName(names) {
  
  return names[names.length-1] + ", " + names[0]
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  return (3 * wins) + ties
}

console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > highestNumber){
      highestNumber = numbers[index];
    }
  }
  let counter = 0;
  for (let index2 = 0; index2 <numbers.length; index2 +=1){
    if(numbers[index2] === highestNumber){
      counter +=1;
    }
  }
  return counter
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

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
