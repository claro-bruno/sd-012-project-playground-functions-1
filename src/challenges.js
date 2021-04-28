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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = cat1 < mouse ? mouse - cat1 : cat1 - mouse;
  cat2 = cat2 < mouse ? mouse - cat2 : cat2 - mouse;

  if (cat1 > cat2) {
    return "cat2";
  } else if (cat2 > cat1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  };
};

// Desafio 8
let numbers = [9, 25];

function fizzBuzz(numArr) {
  let fizzBuzzArr = [];

  for (let index in numArr) {
    if (numArr[index] % 3 === 0 && numArr[index] % 5 === 0) {
      fizzBuzzArr.push("fizzBuzz");
    } else if (numArr[index] % 5 === 0) {
      fizzBuzzArr.push("buzz");
    } else if (numArr[index] % 3 === 0) {
      fizzBuzzArr.push("fizz");
    } else {
      fizzBuzzArr.push("bug!")
    };
  };
  return fizzBuzzArr;
};

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
