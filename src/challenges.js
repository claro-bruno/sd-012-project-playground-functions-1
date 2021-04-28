// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  };
};


// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
};


// Desafio 3
function splitSentence(string) {
  let sentence = string;
  let result = sentence.split(' ');
  return result;
};


// Desafio 4
function concatName(names) {
  let result = (names[names.length -1] + ', ' + names[0]);
  
  return result;
};


// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints
};


// Desafio 6
function highestCount(numbers) {
    let higherNumber = 0;
    let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (higherNumber === numbers[index]) {
      count += 1;
    }
  };
  return count;
};


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
