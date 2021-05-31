// Desafio 1
const compareTrue = (bool1, bool2) => bool1 && bool2;
// console.log(compareTrue(true, true));

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;
// console.log(calcArea(51, 1));

// Desafio 3
const splitSentence = (string) => string.split(' ');
// console.log(splitSentence('foguete'));

// Desafio 4
const concatName = (arrayString) => `${arrayString.pop()}, ${arrayString[0]}`;
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + (ties);
// console.log(footballPoints(0, 0));

// Desafio 6
const highestCount = (arrayNumbers) => {
  const higherNum = arrayNumbers.sort((a, b) => a - b).pop();
  return arrayNumbers.reduce((acc, curr) => {
    if (curr === higherNum) {
      acc += 1;
    }
    return acc;
  }, 1);
};
// console.log(higherNumber([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let resposta;
  if (distanceCat1 < distanceCat2) {
    resposta = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function conditionsFizzBuzz(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let newArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    let number = numbers[index];
    newArray.push(conditionsFizzBuzz(number));
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  let vowelNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let index = 0; index < string.length; index += 1) {
    let str = string[index];
    if (vowelNumber[str] === undefined) {
      newString += str;
    } else {
      newString += vowelNumber[str];
    }
  }
  return newString;
}
function decode(string) {
  let newString = '';
  let vowelNumber = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < string.length; index += 1) {
    let str = string[index];
    if (vowelNumber[str] === undefined) {
      newString += str;
    } else {
      newString += vowelNumber[str];
    }
  }
  return newString;
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
