// Desafio 1
// Primeiro commit
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  let compare;

  if (boolean1 === true && boolean2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let position1 = name[0];
  let position2 = name[name.length - 1];
  let result = `${position2}, ${position1}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(higherNumber) {
  // seu código aqui
  let orderNumber = higherNumber.sort();
  let result = [];

  for (let index = 0; index < orderNumber.length; index += 1) {
    if (orderNumber[index] === orderNumber[(orderNumber.length - 1)]) {
      result.push(orderNumber[index]);
    }
  }
  return (result.length);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } if (cat2Distance > cat1Distance) {
    return 'cat1';
  } if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numberFizzBuzzz) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < numberFizzBuzzz.length; index += 1) {
    result[index] = 'bug!';
    if (numberFizzBuzzz[index] % 15 === 0) {
      result[index] = 'fizzBuzz';
    } else if (numberFizzBuzzz[index] % 5 === 0) {
      result[index] = 'buzz';
    } else if (numberFizzBuzzz[index] % 3 === 0) {
      result[index] = 'fizz';
    }
  }
}

// Desafio 9
function encode(vowel) {
  // seu código aqui
  vowel = vowel.replace(/a/g, '1');
  vowel = vowel.replace(/e/g, '2');
  vowel = vowel.replace(/i/g, '3');
  vowel = vowel.replace(/o/g, '4');
  vowel = vowel.replace(/u/g, '5');
  return vowel;
}
function decode(number) {
  // seu código aqui
  number = number.replace(/1/g, 'e');
  number = number.replace(/2/g, 'i');
  number = number.replace(/3/g, 'o');
  number = number.replace(/4/g, 'u');
  number = number.replace(/5/g, 'a');
  return number;
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
