// Desafio 1

let bool1 = true;
let bool2 = false;

compareTrue(bool1, bool2);

function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
calcArea(51, 1);

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
let string = 'go trybe';

splitSentence(string);

function splitSentence(string) {
  let stringSplit = string.split(' ');
  return stringSplit;
}

// Desafio 4
let arr = ['foguete', 'não', 'tem', 'ré'];

concatName(arr);

function concatName(arr) {
  let arrSplit = [];
  for (let index = 0; index < arr.length; index += 1) {
    console.log(index);
    if (index === 0 || index === arr.length - 1) {
      arrSplit.unshift(arr[index]);
    }
  }
  return arrSplit;
}

// Desafio 5
let win = 1;
let tie = 2;

footballPoints(win, tie);

function footballPoints(win, tie) {
  return win * 3 + tie;
}

// Desafio 6
arr = [9, 1, 2, 3, 9, 5, 7];

highestCount(arr);

function highestCount(arr) {
  let highNum = highestNum(arr);
  let count = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (highNum === arr[index]) {
      count += 1;
    }
  }
  return count;
}

function highestNum(arr) {
  let bigNum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] >= bigNum) {
      bigNum = arr[index];
    }
  }
  return bigNum;
}

// Desafio 7
let cat1 = 1;
let cat2 = 3;
let mouse = 0;

catAndMouse(mouse, cat1, cat2);

function catAndMouse(mouse, cat1, cat2) {
  cat1 = mouse > cat1 ? mouse - cat1 : cat1 - mouse;
  cat2 = mouse > cat2 ? mouse - cat2 : cat2 - mouse;

  if (cat1 > cat2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
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
