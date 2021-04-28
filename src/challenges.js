// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');

  return array;
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];

  let result = `${lastItem}, ${firstItem}`;

  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;

  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(numbers) {
  let hightest = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > hightest) {
      hightest = numbers[index];
    }
  }

  let counter = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === hightest) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function highestDistance(distCat1, distCat2) {
  let result;

  if (distCat1 > distCat2) {
    result = 'cat2';
  } else if (distCat2 > distCat1) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  if (distCat1 < 0) {
    distCat1 *= -1;
  }
  let distCat2 = cat2 - mouse;
  if (distCat2 < 0) {
    distCat2 *= -1;
  }

  return highestDistance(distCat1, distCat2);
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(word) {
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let arrayWord = word.split('');
  let result = '';

  for (let indexWord = 0; indexWord < word.length; indexWord += 1) {
    for (let key in vowels) {
      if (word[indexWord] === key) {
        arrayWord[indexWord] = vowels[key];
      }
    }
    result += arrayWord[indexWord];
  }

  return result;
}

function decode(string) {
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let arrayString = string.split('');
  let result = '';

  for (let indexString = 0; indexString < string.length; indexString += 1) {
    for (let key in vowels) {
      if (string[indexString] === key) {
        arrayString[indexString] = vowels[key];
      }
    }
    result += arrayString[indexString];
  }

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
