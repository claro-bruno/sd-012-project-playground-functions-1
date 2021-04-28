// Desafio 1
let boolean1 = false;
let boolean2 = true;

function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(boolean1, boolean2));

// Desafio 2
let base = 51;
let height = 1;

function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(base, height));

// Desafio 3
let string1 = "go trybe";
let string2 = "vamo que vamo";
let string3 = "foguete"

function splitSentence(string) {
  let split = string.split(" ");
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
let wins = 0;
let ties = 0;

function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
}
console.log(footballPoints(wins, ties));

// Desafio 6
let numberArray1 = [9, 1, 2, 3, 9, 5, 7];
let numberArray2 = [0, 4, 4, 4, 9, 2, 1];
let numberArray3 = [0, 0, 0];

function highestCount() {
  // seu código aqui
}

// Desafio 7
let mouse = 0;
let cat1 = 12;
let cat2 = -12;

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}
console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
let numberArray4 = [2, 15, 7, 9, 45];
let numberArray5 = [7, 9];
let numberArray6 = [9, 25];

function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index in numberArray) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 !== 0) {
      stringArray.push("fizz");
    } else if (numberArray[index] % 5 === 0 && numberArray[index] % 3 !== 0) {
      stringArray.push("buzz");
    } else if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      stringArray.push("fizzBuzz");
    } else {
      stringArray.push("bug!");
    }
  }
  return stringArray;
}
console.log(fizzBuzz(numberArray4));
console.log(fizzBuzz(numberArray5));
console.log(fizzBuzz(numberArray6));

// Desafio 9
let decodedString = "hi there!";
let encodedString = "h3 th2r2!";

function encode(decodedString) {
  let encodedString = "";
  for (let index in decodedString) {
    switch (decodedString[index]) {
      case "a":
        encodedString += "1";
        break;
      case "e":
        encodedString += "2";
        break;
      case "i":
        encodedString += "3";
        break;
      case "o":
        encodedString += "4";
        break;
      case "u":
        encodedString += "5"
        break;
      default:
        encodedString += decodedString[index];
    }
  }
  return encodedString;
}
console.log(encode(decodedString));
function decode(encodedString) {
  let decodedString = "";
  for (let index in encodedString) {
    switch (encodedString[index]) {
      case "1":
        decodedString += "a";
        break;
      case "2":
        decodedString += "e";
        break;
      case "3":
        decodedString += "i";
        break;
      case "4":
        decodedString += "o";
        break;
      case "5":
        decodedString += "u"
        break;
      default:
        decodedString += encodedString[index];
    }
  }
  return decodedString;
}
console.log(decode(encodedString));

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
