// Desafio 1

let bool1 = true;
let bool2 = false;

console.log(compareTrue(bool1, bool2));

function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
console.log(calcArea(51, 1));

function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
let string = 'go trybe';

console.log(splitSentence(string));

function splitSentence(string) {
  let stringSplit = string.split(' ');
  return stringSplit;
};

// Desafio 4
let arr = ['foguete', 'não', 'tem', 'ré'];

console.log(concatName(arr));

function concatName(arr) {
  let arrSplit = [];
  for(let index = 0; index<arr.length; index+=1){
    console.log(index);
    if(index === 0 || index === arr.length-1){
      arrSplit.unshift(arr[index]);
    };
  };
  return arrSplit;
};

// Desafio 5
let win = 1;
let tie = 2;

console.log(footballPoints(win, tie));

function footballPoints() {
  return ((win * 3) + tie);
};

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
