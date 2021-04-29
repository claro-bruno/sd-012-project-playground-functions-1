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
  for (let index in array) {
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
  for (let index in numberArray) {
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
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}
console.log(catAndMouse(0, 12, -12));

// Desafio 8
let numberArray4 = [2, 15, 7, 9, 45];
let numberArray5 = [7, 9];
let numberArray6 = [9, 25];

function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index in numberArray) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 !== 0) {
      stringArray.push('fizz');
    } else if (numberArray[index] % 5 === 0 && numberArray[index] % 3 !== 0) {
      stringArray.push('buzz');
    } else if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      stringArray.push('fizzBuzz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
}
console.log(fizzBuzz(numberArray4));
console.log(fizzBuzz(numberArray5));
console.log(fizzBuzz(numberArray6));

// Desafio 9
function encode(decodedString) {
  let encodedString = '';
  for (let index in decodedString) {
    switch (decodedString[index]) {
    case 'a':
      encodedString += '1';
      break;
    case 'e':
      encodedString += '2';
      break;
    case 'i':
      encodedString += '3';
      break;
    case 'o':
      encodedString += '4';
      break;
    case 'u':
      encodedString += '5';
      break;
    default:
      encodedString += decodedString[index];
    }
  }
  return encodedString;
}
console.log(encode('hi there!'));

function decode(encodedString) {
  let decodedString = '';
  for (let index in encodedString) {
    switch (encodedString[index]) {
    case '1':
      decodedString += 'a';
      break;
    case '2':
      decodedString += 'e';
      break;
    case '3':
      decodedString += 'i';
      break;
    case '4':
      decodedString += 'o';
      break;
    case '5':
      decodedString += 'u';
      break;
    default:
      decodedString += encodedString[index];
    }
  }
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
