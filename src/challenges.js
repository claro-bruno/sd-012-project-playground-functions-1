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

// Desafio 5
let team = {
  wins: 14,
  ties: 8,
};

function footballPoints(wins, ties) {
  let scorePoints = (wins * 3) + ties;
  
  return scorePoints;
};

// Desafio 6
let arrNumbers = [0, 4, 4, 4, 9, 2, 1];

function highestNum(arr) {
  let highNum = 0;
  for(let index = 0; index<arr.length; index+=1){
    if(arr[index]>=highNum){
      highNum = arr[index];
    };
  };
  return highNum;
};


function highestCount(numbers) {
  let repetitions = 0;
  let highNumber = highestNum(numbers);
  
  for (let index = 0; index < numbers.length; index += 1) {
    if (highNumber === numbers[index]) {
      repetitions += 1;
    };
  };

  return repetitions;
};

console.log(highestCount(arrNumbers));

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}

function decode() {

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
