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

// Desafio 9 - ESLint
function challengeNine(characters, word, index) {
  for (let key in characters) {
    if (word[index] === key) {
      return characters[key];
    }
  }
  return word[index];
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
  let greater = Math.max.apply(null, numbers);
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === greater) {
      counter += 1;
    }
  }
  return counter;
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
function encode(word) {
  let characters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let code = '';
  for (let index = 0; index < word.length; index += 1) {
    code += challengeNine(characters, word, index);
  }
  return code;
}

function decode(word) {
  let characters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decoding = '';
  for (let index = 0; index < word.length; index += 1) {
    decoding += challengeNine(characters, word, index);
  }
  return decoding;
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

console.log(highestCount([9, 19, 30, 30, 9, 5, 7]));
