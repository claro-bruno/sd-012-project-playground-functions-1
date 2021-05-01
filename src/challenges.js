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

function encodeRule(letter, rule) {
  for (let key in rule) {
    if (letter === key) {
      letter = rule[key];
    }
  }
  return letter;
}

function encodeExec(word, rule) {
  let result = '';
  for (let letter of word) {
    result += encodeRule(letter, rule);
  }
  return result;
}

function encode(word) {
  let rules = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return encodeExec(word, rules);
}

//  função de decifrar;
function decodeRule(number, rule) {
  for (let key in rule) {
    if (number === key) {
      number = rule[key];
    }
  }
  return number;
}

function decodeExec(word, rule) {
  let result = '';
  for (let number of word) {
    result += decodeRule(number, rule);
  }
  return result;
}

function decode(word) {
  let rules = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return decodeExec(word, rules);
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
