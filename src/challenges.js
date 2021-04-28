// Desafio 1
function compareTrue(param1, param2) {
  let comparation = false;
  if (param1 === true && param2 === true) {
    comparation = true;
  }
  return comparation;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concatArray;
  concatArray = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
  return concatArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (3 * wins) + ties;
  return score;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = Number.NEGATIVE_INFINITY;
  let frequencyOfTheHighest = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === highestNumber) {
      frequencyOfTheHighest += 1;
    }
  }
  return frequencyOfTheHighest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catcher;
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    catcher = 'cat2';
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    catcher = 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    catcher = 'os gatos trombam e o rato foge';
  }
  return catcher;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 != 0) {
      fizzBuzzArray[index] = 'fizz';
    } else if (numbersArray[index] % 3 != 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzArray[index] = 'buzz';
    } else if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0){
      fizzBuzzArray[index] = 'fizzBuzz';
    } else {
      fizzBuzzArray[index] = 'bug!';
    }
  }
  return fizzBuzzArray;
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
