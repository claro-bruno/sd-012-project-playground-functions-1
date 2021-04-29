// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = boolean1 && boolean2;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = [];
  let word = '';
  for (let index = 0; index <= string.length; index += 1) {
    if (string[index] === ' ' || index === string.length) {
      result.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  return result;
}

// Desafio 4
function concatName(arrayStrings) {
  let firstItem;
  let lastItem;
  let result = '';
  for (let index = 0; index < arrayStrings.length; index += 1) {
    if (index === 0) {
      firstItem = arrayStrings[index];
    }
    if (index === arrayStrings.length - 1) {
      lastItem = arrayStrings[index];
    }
  }
  result = `${lastItem}, ${firstItem}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let result = winsPoints + tiesPoints;
  return result;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = 0;
  let result = 0;

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] > maior) {
      maior = arrayNumbers[index];
    }
  }

  for (let index in arrayNumbers) {
    if (maior === arrayNumbers[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat2 < distCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let result = [];

  for (let index in numbersArray) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  for (let index in string) {
    if (string[index] === 'a') {
      result += '1';
    } else if (string[index] === 'e') {
      result += '2';
    } else if (string[index] === 'i') {
      result += '3';
    } else if (string[index] === 'o') {
      result += '4';
    } else if (string[index] === 'u') {
      result += '5';
    } else {
      result += string[index];
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let index in string) {
    if (string[index] === '1') {
      result += 'a';
    } else if (string[index] === '2') {
      result += 'e';
    } else if (string[index] === '3') {
      result += 'i';
    } else if (string[index] === '4') {
      result += 'o';
    } else if (string[index] === '5') {
      result += 'u';
    } else {
      result += string[index];
    }
  }
  return result;
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
