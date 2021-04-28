// Desafio 6 - ESLint
function mostRepeated(numbers, greater) {
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === greater) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 8 - ESLint
function validation(number) {
  if ((number % 5 === 0) && (number % 3 === 0)) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(phrase) {
  let firstWord = phrase[0];
  let lastWord = phrase[phrase.length - 1];
  return `${lastWord}, ${firstWord}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let greater = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > greater) {
      greater = numbers[index];
    }
  }
  return mostRepeated(numbers, greater);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2 || (Math.abs(cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
  if ((Math.abs(cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let answer = [];
  for (let index = 0; index < numbers.length; index += 1) {
    answer.push(validation(numbers[index]));
  }
  return answer;
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
