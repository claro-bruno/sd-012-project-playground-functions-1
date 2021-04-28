// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(0, 1));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(names) {
  let concatNames = [];
  for (let index = 0; index < names.length; index += 1) {
    if (names[index] === names[0] || names[index] === names[names.length - 1]) {
      concatNames.push(names[index]);
    }
  }
  return concatNames.reverse().join(', ');
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0) {
    wins = wins * 3
  }
  if (ties > 0) {
    ties = ties * 1
  }
  let totalPoints = wins + ties
  return totalPoints;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
      highNumber = numbers[index];
    }
  }
  let repeatedCount = 0;
  for (let num in numbers) {
    if (highNumber === numbers[num]) {
      repeatedCount += 1
    }
  }
  return repeatedCount
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
