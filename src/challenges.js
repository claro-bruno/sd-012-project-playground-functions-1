// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  let phrase = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      phrase += `${array[array.length - 1]}, `;
    } else if (index === (array.length - 1)) {
      phrase += array[0];
    }
  }
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let hightestIndex = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > array[hightestIndex]) {
      hightestIndex = index;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[hightestIndex] === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouseDistance, cat1Distance, cat2Distance) {
  let cat1MouseDist = Math.abs(mouseDistance - cat1Distance);
  let cat2MouseDist = Math.abs(mouseDistance - cat2Distance);
  if (cat1MouseDist > cat2MouseDist) {
    return 'cat2';
  } else if (cat2MouseDist > cat1MouseDist) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let answerArray = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      answerArray[key] = 'fizzBuzz';
    } else if (array[key] % 3 === 0) {
      answerArray[key] = 'fizz';
    } else if (array[key] % 5 === 0) {
      answerArray[key] = 'buzz';
    } else {
      answerArray[key] = 'bug!';
    }
  }
  return answerArray;
}

// Desafio 9
function encode(string) {
  let stringLowerCase = string.split('');
  for (let key in stringLowerCase) {
    if (stringLowerCase[key] === 'a') {
      stringLowerCase[key] = '1';
    } else if (stringLowerCase[key] === 'e') {
      stringLowerCase[key] = '2';
    } else if (stringLowerCase[key] === 'i') {
      stringLowerCase[key] = '3';
    } else if (stringLowerCase[key] === 'o') {
      stringLowerCase[key] = '4';
    } else if (stringLowerCase[key] === 'u') {
      stringLowerCase[key] = '5';
    }
  }
  return stringLowerCase.join('');
}

function decode(string) {
  let stringLowerCase = string.split('');
  for (let key in stringLowerCase) {
    if (stringLowerCase[key] === '1') {
      stringLowerCase[key] = 'a';
    } else if (stringLowerCase[key] === '2') {
      stringLowerCase[key] = 'e';
    } else if (stringLowerCase[key] === '3') {
      stringLowerCase[key] = 'i';
    } else if (stringLowerCase[key] === '4') {
      stringLowerCase[key] = 'o';
    } else if (stringLowerCase[key] === '5') {
      stringLowerCase[key] = 'u';
    }
  }
  return stringLowerCase.join('');
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
