// Desafio 1
function compareTrue(num1, num2) {
  if (num1 && num2 === num1 && num2) {
    return true;
  }
  return false;
}

console.log(compareTrue(1, 1));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let firstItem = array[0].split(' ');
  let lastItem = array[array.length - 1].split(', ');
  let result = lastItem.concat(firstItem);
  let resultAsString = result.join(', ');

  return resultAsString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3;
  let tiePoint = 1;

  return (wins * winPoint) + (ties * tiePoint);
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let order = numbers.sort();
  let highest = order[numbers.length - 1];
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highest) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
