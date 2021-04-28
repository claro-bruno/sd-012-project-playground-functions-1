// Desafio 1
let bool1 = true;
let bool2 = true;

function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  else {
    return false;
  }; 
};

// Desafio 2
let base = 51;
let height = 1;

function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
let string = "Vamo que vamo!";

function splitSentence(string) {
 let array = string.split(" ");

 return array;
};

// Desafio 4
let separateString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(separateString) {
  let stringSplit = [];
  let stringJoin = "";

  for(let index = 0; index < separateString.length; index += 1){
    if(index === 0 || index === separateString.length - 1){
      stringSplit.unshift(separateString[index]);
      stringJoin = stringSplit.join(", ")
    };
  };
  return stringJoin;
};

console.log(concatName(separateString));

// console.log(concatName(separateString));

// console.log(concatName(separateString));

// // Desafio 5
// // function footballPoints() {
//   // seu código aqui
// }

// // Desafio 6
// function highestCount() {
//   // seu código aqui
// }

// // Desafio 7
// function catAndMouse() {
//   // seu código aqui
// }

// // Desafio 8
// function fizzBuzz() {
//   // seu código aqui
// }

// // Desafio 9
// function encode() {
//   // seu código aqui
// }

// function decode() {
//   // seu código aqui
// }

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
