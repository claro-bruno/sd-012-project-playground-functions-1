// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
let string1 = 'go trybe';
let string2 = 'vamo que vamo';
let string3 = 'foguete';

function splitSentence(string) {
  let split = string.split(' ');
  return split;
}
console.log(splitSentence(string1));
console.log(splitSentence(string2));
console.log(splitSentence(string3));

// Desafio 4
let stringsArray1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let stringsArray2 = ['foguete', 'não', 'tem', 'ré'];
let stringsArray3 = ['captain', 'my', 'captain'];

function concatName(array) {
  let firstName = array[0];
  let lastName = array[(array.length) - 1];
  return `${lastName}, ${firstName}`;
}
console.log(concatName(stringsArray1));
console.log(concatName(stringsArray2));
console.log(concatName(stringsArray3));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
}
console.log(footballPoints(0, 0));

// Desafio 6
let numberArray1 = [9, 1, 2, 3, 9, 5, 7];
let numberArray2 = [0, 4, 4, 4, 9, 2, 1];
let numberArray3 = [0, 0, 0];

function getHighestNumberFromArray(array) {
  let highestNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  return highestNumber;
}
console.log(getHighestNumberFromArray(numberArray1));
console.log(getHighestNumberFromArray(numberArray2));
console.log(getHighestNumberFromArray(numberArray3));

function highestCount(numberArray) {
  let highestNumber = getHighestNumberFromArray(numberArray);

  let contNumero = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (highestNumber === numberArray[index]) {
      contNumero += 1;
    }
  }
  return contNumero;
}
console.log(highestCount(numberArray1));
console.log(highestCount(numberArray2));
console.log(highestCount(numberArray3));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) return 'cat1';
  if (distanceCat1 === distanceCat2) return 'os gatos trombam e o rato foge';
  return 'cat2';
}
console.log(catAndMouse(0, 12, -12));

// Desafio 8
let numberArray4 = [2, 15, 7, 9, 45];
let numberArray5 = [7, 9];
let numberArray6 = [9, 25];

function by3NotBy5(stringOfNumbers, stringArray) {
  if (stringOfNumbers % 3 === 0 && stringOfNumbers % 5 !== 0) stringArray.push('fizz');
  return stringArray;
}

function by5NotBy3(stringOfNumbers, stringArray) {
  if (stringOfNumbers % 3 !== 0 && stringOfNumbers % 5 === 0) stringArray.push('buzz');
  return stringArray;
}

function by3AndBy5(stringOfNumbers, stringArray) {
  if (stringOfNumbers % 3 === 0 && stringOfNumbers % 5 === 0) stringArray.push('fizzBuzz');
  return stringArray;
}

function notBy3NotBy5(stringOfNumbers, stringArray) {
  if (stringOfNumbers % 3 !== 0 && stringOfNumbers % 5 !== 0) stringArray.push('bug!');
  return stringArray;
}

function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    stringArray = by3NotBy5(numberArray[index], stringArray);
    stringArray = by5NotBy3(numberArray[index], stringArray);
    stringArray = by3AndBy5(numberArray[index], stringArray);
    stringArray = notBy3NotBy5(numberArray[index], stringArray);
  }
  return stringArray;
}
console.log(fizzBuzz(numberArray4));
console.log(fizzBuzz(numberArray5));
console.log(fizzBuzz(numberArray6));

// Desafio 9
function isVowel(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < vowels.length; index += 1) {
    if (character === vowels[index]) {
      return true;
    }
  }
  return false;
}

function characterChangerEncode(encodedString, decodedString, index) {
  let codex = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let done = false;
  for (let vowel in codex) {
    if (decodedString[index] === vowel && done === false) {
      encodedString += codex[vowel];
      done = true;
    }
  }
  return encodedString;
}

function encoder(encodedString, decodedString) {
  for (let index = 0; index < decodedString.length; index += 1) {
    if (isVowel(decodedString[index])) {
      encodedString = characterChangerEncode(encodedString, decodedString, index);
    } else {
      encodedString += decodedString[index];
    }
  }
  return encodedString;
}

function encode(decodedString) {
  let encodedString = '';
  encodedString = encoder(encodedString, decodedString);
  return encodedString;
}
console.log(encode('hi there!'));

function isNumber(character) {
  let numbers = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < numbers.length; index += 1) {
    if (character === numbers[index]) {
      return true;
    }
  }
  return false;
}

function characterChangerDecode(decodedString, encodedString, index) {
  let codex = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let done = false;
  for (let number in codex) {
    if (encodedString[index] === number && done === false) {
      decodedString += codex[number];
      done = true;
    }
  }
  return decodedString;
}

function decoder(decodedString, encodedString) {
  for (let index = 0; index < encodedString.length; index += 1) {
    if (isNumber(encodedString[index])) {
      decodedString = characterChangerDecode(decodedString, encodedString, index);
    } else {
      decodedString += encodedString[index];
    }
  }
  return decodedString;
}

function decode(encodedString) {
  let decodedString = '';
  decodedString = decoder(decodedString, encodedString);
  return decodedString;
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
