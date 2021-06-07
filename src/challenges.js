// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// // Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  const firstElement = array[0];
  const lastElement = array[array.length -1];
  return `${lastElement}, ${firstElement}`
}

// Desafio 5
function footballPoints(wins, ties) {
  const win = wins * 3;
  const tie = ties * 1;

  return win + tie;
}

// Desafio 6
function highestCount(array) {
  let count = 0
  let highestNumber = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] >= highestNumber) {
      highestNumber = array[i];
    }
  }
  for (i = 0; i < array.length; i += 1) {
    if (highestNumber === array[i]) {
      count += 1;
    }
  }
  return count;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

}

// Desafio 8
function fizzBuzz(array) {

}

// Desafio 9
function encode(string) {

}

function decode() {
  
}

// console.log(encode('hi there'));

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
