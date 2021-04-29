// Desafio 1
function compareTrue(valueA, valueB) {
  return (valueA && valueB);
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  let word = '';
  for (let index = 0; index < sentence.length; index += 1) {
    if (index === sentence.length - 1) {
      word += sentence[index];
      array.push(word);
    } else if (sentence[index] !== ' ') {
      word += sentence[index];
    } else {
      array.push(word);
      word = '';
    }
  }
  return array;
}
// let sentence = 'go Trybe';
// console.log(splitSentence(sentence));
// let sentence2 = 'vamo que vamo';
// console.log(splitSentence(sentence2));
// let sentence3 = 'foguete';
// console.log(splitSentence(sentence3));

// Desafio 4
function concatName(array) {
  let switched = '';
  let firstWord = array[0];
  let lastWord = array[array.length - 1];
  for (let index = 0; index < lastWord.length; index += 1) {
    switched += lastWord[index];
  }
  switched += ', ';
  for (let index = 0; index < firstWord.length; index += 1) {
    switched += firstWord[index];
  }
  return switched;
}
// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(array));
// let array2 = ['foguete', 'não', 'tem', 'ré'];
// console.log(concatName(array2));
// let array3 = ['captain', 'my', 'captain']
// console.log(concatName(array3));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let points = wins * winPoints + ties * tiePoints;
  return points;
}
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let highCount = 1;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index];
      highCount = 1;
    } else if (array[index] === highest) {
      highCount += 1;
    }
  }
  return highCount;
}
// let array = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(array));
// let array2 = [0, 4, 4, 4, 9, 2, 1];
// console.log(highestCount(array2));
// let array3 = [0, 0, 0];
// console.log(highestCount(array3));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}
// let mouse = 0, cat1 = 3, cat2 = 2;
// console.log(catAndMouse(mouse, cat1, cat2));
// let mouse2 = 0, cat12 = 6, cat22 = 12;
// console.log(catAndMouse(mouse2, cat12, cat22));
// let mouse3 = 0, cat13 = 6, cat23 = 6;
// console.log(catAndMouse(mouse3, cat13, cat23));

// Desafio 8
function fizzBuzz(array) {
  let outputArray = [];
  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      outputArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      outputArray.push('fizz');
    } else if (number % 5 === 0) {
      outputArray.push('buzz');
    } else {
      outputArray.push('bug!');
    }
  }
  return outputArray;
}
// let array =  [2, 15, 7, 9, 45];
// console.log(fizzBuzz(array));
// let array2 = [7, 9];
// console.log(fizzBuzz(array2));
// let array3 = [9, 25];
// console.log(fizzBuzz(array3));

// Desafio 9
function encode(message) {
  let encoded = '';
  for (let index = 0; index < message.length; index += 1) {
    if (message[index] === 'a' || message[index] === 'e' || message[index] === 'i'
    || message[index] === 'o' || message[index] === 'u') {
      switch (message[index]) {
      case 'a':
        encoded += '1'; break;
      case 'e':
        encoded += '2'; break;
      case 'i':
        encoded += '3'; break;
      case 'o':
        encoded += '4'; break;
      case 'u':
        encoded += '5'; break;
      default: break;
      }
    } else {
      encoded += message[index];
    }
  }
  return encoded;
}
// let message = "hi there!";
// console.log(encode(message));

function decode(message) {
  let decoded = '';
  for (let index = 0; index < message.length; index += 1) {
    if (message[index] === '1' || message[index] === '2'
    || message[index] === '3' || message[index] === '4'
    || message[index] === '5') {
     switch (message[index]) {
      case '1':
        decoded += 'a';
        break;
      case '2':
        decoded += 'e';
        break;
      case '3':
        decoded += 'i';
        break;
      case '4':
        decoded += 'o';
        break;
      case '5':
        decoded += 'u';
        break;
      default:
        break;
      }
    } else {
      decoded += message[index];
    }
  }
  return decoded;
}
// let message2 = "h3 th2r2!";
// console.log(decode(message2));

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
