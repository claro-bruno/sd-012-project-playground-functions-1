// Desafio 1
// function compareTrue(bool1, bool2) {
//   if (bool1 === true && bool2 === true) return true;

//   return false;
// }

const compareTrue = (bool1, bool2) => bool1 === true && bool2 === true;

// Desafio 2
// function calcArea(base, height) {
//   let area = (base * height) / 2;

//   return area;
// }

const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
// function splitSentence(string) {
//   let array = [];
//   array = string.split(' ');

//   return array;
// }

const splitSentence = (string) => string.split(' ');

// Desafio 4
// function concatName(array) {
//   let lastItem = array[array.length - 1];
//   let firstItem = array[0];

//   let result = `${lastItem}, ${firstItem}`;

//   return result;
// }

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
// function footballPoints(wins, ties) {
//   let winPoints = wins * 3;
//   let tiePoints = ties;

//   return winPoints + tiePoints;
// }

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
// function highestNumber(numbers) {
//   let hightest = numbers[0];

//   for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > hightest) {
//       hightest = numbers[index];
//     }
//   }

//   return hightest;
// }

// function highestCount(numbers) {
//   let highest = highestNumber(numbers);

//   let counter = 0;

//   for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] === highest) {
//       counter += 1;
//     }
//   }

//   return counter;
// }

const highestCount = (numbers) => {
  let highest = 0;

  numbers.forEach((number) => {
    if (number > highest) highest = number;
  });

  const filteredByHighest = numbers.filter((number) => number === highest);

  return filteredByHighest.length;
};

// Desafio 7
// function highestDistance(distCat1, distCat2) {
//   if (distCat1 > distCat2) return 'cat2';
//   if (distCat2 > distCat1) return 'cat1';

//   return 'os gatos trombam e o rato foge';
// }

// function catAndMouse(mouse, cat1, cat2) {
//   let distCat1 = Math.abs(cat1 - mouse);
//   let distCat2 = Math.abs(cat2 - mouse);

//   return highestDistance(distCat1, distCat2);
// }

const catAndMouse = (mouse, cat1, cat2) => {
  const distCat1 = Math.abs(cat1 - mouse);
  const distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 > distCat2) return 'cat2';
  if (distCat2 > distCat1) return 'cat1';

  return 'os gatos trombam e o rato foge';
};

// Desafio 8
// function pushString(numbers, index) {
//   if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) return 'fizzBuzz';
//   if (numbers[index] % 3 === 0) return 'fizz';
//   if (numbers[index] % 5 === 0) return 'buzz';
//   return 'bug!';
// }

// function fizzBuzz(numbers) {
//   let result = [];
//   for (let index = 0; index < numbers.length; index += 1) {
//     result.push(pushString(numbers, index));
//   }
//   return result;
// }

const fizzBuzz = (numbers) => {
  const result = numbers.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
    if (number % 3 === 0) return 'fizz';
    if (number % 5 === 0) return 'buzz';
    return 'bug!';
  });

  return result;
};

// Desafio 9
function changeVowelToNumber(string, index, splitedString) {
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let key in vowels) {
    if (string[index] === key) {
      splitedString[index] = vowels[key];
    }
  }
  return splitedString[index];
}

function encode(string) {
  let arrayString = string.split('');
  let result = '';

  arrayString.forEach((letter, index, array) => {
    result += changeVowelToNumber(string, index, array);
  });

  return result;
}

function changeNumberToVowel(string, index, splitedString) {
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let key in vowels) {
    if (string[index] === key) {
      splitedString[index] = vowels[key];
    }
  }
  return splitedString[index];
}

function decode(string) {
  let arrayString = string.split('');
  let result = '';

  arrayString.forEach((char, index, array) => {
    result += changeNumberToVowel(string, index, array);
  });

  return result;
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
