// Desafio 1

const compareTrue = (bool1, bool2) => bool1 === true && bool2 === true;

// Desafio 2

const calcArea = (base, height) => (base * height) / 2;

// Desafio 3

const splitSentence = (string) => string.split(' ');

// Desafio 4

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6

const highestCount = (numbers) => {
  const highest = numbers.reduce((acc, curr) => {
    const result = curr > acc ? curr : acc;
    return result;
  });

  const filteredByHighest = numbers.filter((number) => number === highest);

  return filteredByHighest.length;
};

// Desafio 7

const catAndMouse = (mouse, cat1, cat2) => {
  const distCat1 = Math.abs(cat1 - mouse);
  const distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 > distCat2) return 'cat2';
  if (distCat2 > distCat1) return 'cat1';

  return 'os gatos trombam e o rato foge';
};

// Desafio 8

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
const vowelsAndNumbers = [
  { char: 'a', number: 1 },
  { char: 'e', number: 2 },
  { char: 'i', number: 3 },
  { char: 'o', number: 4 },
  { char: 'u', number: 5 },
];

const encode = (string) => string
  .split('')
  .map((char) => {
    let change = char;
    vowelsAndNumbers.forEach((item) => {
      if (char === item.char) change = item.number;
    });
    return change;
  })
  .join('');

const decode = (string) => string
  .split('')
  .map((char) => {
    let change = char;
    vowelsAndNumbers.forEach((item) => {
      if (char === item.number.toString()) change = item.char;
    });
    return change;
  })
  .join('');

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
