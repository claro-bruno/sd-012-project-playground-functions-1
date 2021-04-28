/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
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
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > greater) {
      greater = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === greater) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(unityCatOne, unityCatTwo, unityRat) {
  if (unityCatOne === unityCatTwo) {
    return 'os gatos trombam e o rato foge';
  } if ((Math.abs(unityCatOne - unityRat)) < Math.abs((unityCatTwo - unityRat))) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let answer = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 5 === 0) && (numbers[index] % 3 === 0)) {
      answer.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      answer.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      answer.push('Buzz');
    } else {
      answer.push('bug!');
    }
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

console.log(fizzBuzz([9, 25]));
