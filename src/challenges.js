// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 && bool2) {
    return true;
  }
  if (!bool1 || !bool2) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let words = [];
  let word = '';
  for (let index = 0; index < (phrase.length); index += 1) {
    if (phrase[index] !== ' ') {
      word += phrase[index];
    } else {
      words.push(word);
      word = '';
    }
  }
  if (word !== '') {
    words.push(word);
    word = '';
  }

  return words;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  return `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = 0;
  for (let index = 0; index < wins; index += 1) {
    winsPoints += 3;
  }
  return (winsPoints + ties);
}

// Auxiliar do desafio 6
function numberCountVerify(highestNumber, numberArray) {
  let numberCount = 0;
  for (let numberIndex = 0; numberIndex < numberArray.length; numberIndex += 1) {
    if (numberArray[numberIndex] === highestNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  let highestNumber = numberArray[0];
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index];
    }
  }
  return numberCountVerify(highestNumber, numberArray);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let mouseValue = Math.abs(mouse);
  let cat1Value = Math.abs(cat1);
  let cat2Value = Math.abs(cat2);
  if (Math.abs(cat1Value - mouseValue) < Math.abs(cat2 - mouseValue)) {
    return 'cat1';
  }
  if (Math.abs(cat1Value - mouseValue) > Math.abs(cat2Value - mouseValue)) {
    return 'cat2';
  }
  if (Math.abs(cat1Value - mouseValue) === Math.abs(cat2Value - mouseValue)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Auxiliar do desafio 8
function fizzBuzzAux(value) {
  if ((value % 3) === 0 && (value % 5) !== 0) {
    return 'fizz';
  }
  if ((value % 5) === 0 && (value % 3) !== 0) {
    return 'buzz';
  }
  if ((value % 3) === 0 && (value % 5) === 0) {
    return 'fizzBuzz';
  }
  if ((value % 3) !== 0 && (value % 5) !== 0) {
    return 'bug!';
  }
}

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let fizzBuzzArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    fizzBuzzArray[index] = fizzBuzzAux([numberArray[index]]);
  }
  return fizzBuzzArray;
}

function encodeAux(char) {
  switch (char) {
    case 'a':
      return '1';
    case 'e':
      return '2';
    case 'i':
      return '3';
    case 'o':
      return '4';
    case 'u':
      return '5';
    default:
      return char;
  }
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let encodeValue = '';
  for (let index = 0; index < phrase.length; index += 1) {
    encodeValue += encodeAux(phrase[index]);
  }
  return encodeValue;
}

function decodeAux(char) {
  switch (char) {
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';
    default:
      return char;
  }
}

function decode(phrase) {
  // seu código aqui
  let decodeValue = '';
  for (let index = 0; index < phrase.length; index += 1) {
    decodeValue += decodeAux(phrase[index]);
  }
  return decodeValue;
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
