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
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1diff = Math.abs(cat1 - mouse);
  let cat2diff = Math.abs(cat2 - mouse);

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
  for (let number in array) {
    if (array[number] % 3 === 0
    && array[number] % 5 === 0) {
      array[number] = 'fizzBuzz';
    } else if (array[number] % 3 === 0) {
      array[number] = 'fizz';
    } else if (array[number] % 5 === 0) {
      array[number] = 'buzz';
    } else {
      array[number] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let text = string;
  text = text.replace(/a/g, '1');
  text = text.replace(/e/g, '2');
  text = text.replace(/i/g, '3');
  text = text.replace(/o/g, '4');
  text = text.replace(/u/g, '5');
  return text;
}

function decode(string) {
  let text = string;
  text = text.replace(/1/g, 'a');
  text = text.replace(/2/g, 'e');
  text = text.replace(/3/g, 'i');
  text = text.replace(/4/g, 'o');
  text = text.replace(/5/g, 'u');
  return text;
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
