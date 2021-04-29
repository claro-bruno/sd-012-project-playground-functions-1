// Desafio 1
function compareTrue(firstOperator, secondOperator) {
  let comparison = false;
  if (firstOperator === true && secondOperator === true) {
    comparison = true;
  }
  return comparison;
}
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
// Desafio 3
function splitSentence(string) {
  let words = string.split(' '); // Ref.: https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words#:~:text=Just%20use%20split%20%3A,%22%2C%20%22sentence.%22%5D
  return words;
}
// Desafio 4
function concatName(array) {
  let item1 = array[(array.length) - 1];
  let item2 = array[0];
  return `${item1}, ${item2}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}
// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max.apply(null, array);
  let count = 0;
  for (let number = 0; number < array.length; number += 1) {
    if (array[number] === highestNumber) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1diff = (cat1 - mouse);
  let cat2diff = (cat2 - mouse);

  if ((cat1 - mouse) < 0) {
    cat1diff = ((cat1 - mouse) * -1);
  }
  if ((cat2 - mouse) < 0) {
    cat2diff = ((cat2 - mouse) * -1);
  }

  if (cat1diff === cat2diff) {
    return 'os gatos trombam e o rato foge';
  } if (cat1diff > cat2diff) {
    return 'cat2';
  } if (cat1diff < cat2diff) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = [];
  for (let number in array) {
    if (((array[number] % 3) === 0
      && (array[number] % 5) !== 0)) {
      arrayReturn[number] = 'fizz';
    } else if ((array[number] % 3) !== 0
    && (array[number] % 5) === 0) {
      arrayReturn[number] = 'buzz';
    } else if ((array[number] % 3) === 0
    && (array[number] % 5) === 0) {
      arrayReturn[number] = 'fizzBuzz';
    } else {
      arrayReturn[number] = 'bug!';
    }
  }
  return arrayReturn;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  for (let char = 0; char < array.length; char += 1) {
    if (array[char] === 'a') {
      array[char] = '1';
    } if (array[char] === 'e') {
      array[char] = '2';
    } if (array[char] === 'i') {
      array[char] = '3';
    } if (array[char] === 'o') {
      array[char] = '4';
    } if (array[char] === 'u') {
      array[char] = '5';
    }
  }
  return array.join(''); // Ref.: https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
}
function decode(string) {
  let array = string.split('');
  for (let char = 0; char < array.length; char += 1) {
    if (array[char] === '1') {
      array[char] = 'a';
    } if (array[char] === '2') {
      array[char] = 'e';
    } if (array[char] === '3') {
      array[char] = 'i';
    } if (array[char] === '4') {
      array[char] = 'o';
    } if (array[char] === '5') {
      array[char] = 'u';
    }
  }
  return array.join(''); // Ref.: https://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
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
