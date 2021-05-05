/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable sonarjs/no-unused-collection */
// Desafio 1
// Primeiro commit
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  let compare;

  if (boolean1 === true && boolean2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let position1 = name[0];
  let position2 = name[name.length - 1];
  let result = `${position2}, ${position1}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6

function getHighestNumber(getHighestArrayCount) {
  let higher = getHighestArrayCount[0];
  for (let key in getHighestArrayCount) {
    if (higher < getHighestArrayCount[key]) {
      higher = getHighestArrayCount[key];
    }
  }
  return higher;
}
function getNumberRepeater(getNumberArrayCount) {
  let repete = 0;
  let higher = getHighestNumber(getNumberArrayCount);
  for (let key in getNumberArrayCount) {
    if (higher === getNumberArrayCount[key]) {
      repete += 1;
    }
  }
  return repete;
}

function highestCount(arrayCount) {
  // Identifica o maior valor
  getHighestNumber(arrayCount);
  // Descobre quantas vezes o maior valor se repete
  return getNumberRepeater(arrayCount);
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } if (cat2Distance > cat1Distance) {
    return 'cat1';
  } if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let key of array) {
    if (key % 3 === 0 && key % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (key % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (key % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(vowel) {
  // seu código aqui
  let vowelToArray = vowel.split('');
  for (let index in vowelToArray) {
    if (vowelToArray[index] === 'a') {
      vowelToArray[index] = 1;
    } else if (vowelToArray[index] === 'e') {
      vowelToArray[index] = 2;
    } else if (vowelToArray[index] === 'i') {
      vowelToArray[index] = 3;
    } else if (vowelToArray[index] === 'o') {
      vowelToArray[index] = 4;
    } else if (vowelToArray[index] === 'u') {
      vowelToArray[index] = 5;
    }
  }
  return vowelToArray.join('');
}
function decode(number) {
  // seu código aqui
  let numberToArray = number.split('');
  for (let index in numberToArray) {
    if (numberToArray[index] === '1') {
      numberToArray[index] = 'a';
    } else if (numberToArray[index] === '2') {
      numberToArray[index] = 'e';
    } else if (numberToArray[index] === '3') {
      numberToArray[index] = 'i';
    } else if (numberToArray[index] === '4') {
      numberToArray[index] = 'o';
    } else if (numberToArray[index] === '5') {
      numberToArray[index] = 'u';
    }
  }
  return numberToArray.join('');
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
