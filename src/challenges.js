// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(paramArray) {
  let primeiroUltimo = `${paramArray[paramArray.length - 1]}, ${paramArray[0]}`;
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function findHighest(numberArray) {
  let higherNumber = 0;
  for (let number of numberArray) {
    if (number > higherNumber) {
      higherNumber = number;
    }
  }
  return higherNumber;
}

function repetions(numberArray, higherNumber) {
  let repetitions = 0;
  for (let index of numberArray) {
    if (index === higherNumber) {
      repetitions += 1;
    }
  }
  return repetitions;
}

function highestCount(numberArray) {
  return repetions(numberArray, findHighest(numberArray));
}

// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  let distance1 = Math.abs(posMouse - posCat1);
  let distance2 = Math.abs(posMouse - posCat2);
  if (distance1 < distance2) {
    return 'cat1';
  } if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzRules(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  } 
  return 'bug!';
}

function fizzBuzz(list) {
  let arrayResult = [];
  for (let number of list) {
    arrayResult.push(fizzBuzzRules(number));
  }
  return arrayResult;
}

// Desafio 9
function encodeExec(word, law) {
  let result = '';
  for (let letter of word) {
    for (let key in law) {
      if (letter === key) {
        letter = law[key];
      }
    }
    result += letter;
  }
  return result;
}

function encode(word) {
  let vowels = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return encodeExec(word, vowels);
}

function decodeExec(word, law) {
  let result = '';
  for (let number of word) {
    for (let key in law) {
      if (number === key) {
        number = law[key];
      }
    }
    result += number;
  }
  return result;
}

function decode(word) {
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return decodeExec(word,vowels);
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
