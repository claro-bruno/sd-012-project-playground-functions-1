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
  const higherNum = Math.max(...arrayNumbers);
  return arrayNumbers.reduce((acc, curr) => {
    if (curr === higherNum) {
      acc += 1;
    }
    return acc;
  }, 0);
};
// console.log(highestCount([10, 10, 2, 3, 9, 5, 9]));

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};
// console.log(catAndMouse(0, 3, -2));

// Desafio 8
const fizzBuzz = (numbers) => numbers.map((number) => {
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
});
// console.log(fizzBuzz([9, 25]));

// Desafio 9
const encode = (string) => {
  const strSplit = string.split('');
  return strSplit.reduce((acc, curr) => {
    const replaceA = curr.replace('a', 1);
    const replaceE = replaceA.replace('e', 2);
    const replaceI = replaceE.replace('i', 3);
    const replaceO = replaceI.replace('o', 4);
    const replaceU = replaceO.replace('u', 5);
    acc += replaceU;
    return acc;
  }, '');
};
// console.log(encode('hi there!'));

const decode = (string) => {
  const strSplit = string.split('');
  return strSplit.reduce((acc, curr) => {
    const replaceA = curr.replace(1, 'a');
    const replaceE = replaceA.replace(2, 'e');
    const replaceI = replaceE.replace(3, 'i');
    const replaceO = replaceI.replace(4, 'o');
    const replaceU = replaceO.replace(5, 'u');
    acc += replaceU;
    return acc;
  }, '');
};
// console.log(decode('h3 th2r2!'));

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
