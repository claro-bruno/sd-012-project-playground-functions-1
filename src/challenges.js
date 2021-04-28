// Desafio 1
function compareTrue(num1, num2) {
  if (num1 && num2 === num1 && num2) {
    return true;
  }
  return false;
}

console.log(compareTrue(1, 1));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let firstItem = array[0].split(' ');
  let lastItem = array[array.length - 1].split(', ');
  let result = lastItem.concat(firstItem);
  let resultAsString = result.join(', ');

  return resultAsString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = 3;
  let tiePoint = 1;

  return (wins * winPoint) + (ties * tiePoint);
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let order = numbers.sort();
  let highest = order[numbers.length - 1];
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highest) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let resultado = '';

  if (distanceCat2 < distanceCat1) {
    resultado = 'cat2';
  } else if (distanceCat2 > distanceCat1) {
    resultado = 'cat1';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

console.log(catAndMouse(1, 7, 13));

// Desafio 8
function checkDivisions(value) {
  if ((value % 3 === 0) && (value % 5 === 0)) {
    return 'fizzBuzz';
  }
  if (value % 3 === 0) {
    return 'fizz';
  }
  if (value % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let results = [];
  for (let index = 0; index < numbers.length; index += 1) {
    results.push(checkDivisions(numbers[index]));
  }
  return results;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(stringEncoded) {
  for (let index = 0; index < stringEncoded.length; index += 1) {
    stringEncoded = stringEncoded.replace('a', '1');
    stringEncoded = stringEncoded.replace('e', '2');
    stringEncoded = stringEncoded.replace('i', '3');
    stringEncoded = stringEncoded.replace('o', '4');
    stringEncoded = stringEncoded.replace('u', '5');
  }
  return stringEncoded;
}

console.log(encode('hi there!'));

function decode(stringDecoded) {
  for (let index = 0; index < stringDecoded.length; index += 1) {
    stringDecoded = stringDecoded.replace('1', 'a');
    stringDecoded = stringDecoded.replace('2', 'e');
    stringDecoded = stringDecoded.replace('3', 'i');
    stringDecoded = stringDecoded.replace('4', 'o');
    stringDecoded = stringDecoded.replace('5', 'u');
  }
  return stringDecoded;
}

console.log(decode('h3 th2r2!'));

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
