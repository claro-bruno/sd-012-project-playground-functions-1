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
function highestCount(numArray) {
  let higherNum = 0;
  let repetitions = 0;
  for (let index in numArray) {
    if (numArray[index] > higherNum) {
      higherNum = numArray[index];
    }
  }
  for (let number of numArray) {
    if (number === higherNum) {
      repetitions += 1;
    }
  }
  return repetitions;
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
function fizzBuzz(list) {
  let arrayResult = [];
  for (let index in list) {
    if (list[index] % 3 === 0 && list[index] % 5 !== 0) {
      arrayResult.push('fizz');
    } else if (list[index] % 5 === 0 && list[index] % 3 !== 0) {
      arrayResult.push('buzz');
    } else if (list[index] % 3 === 0 && list[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(word) {
  let vowels = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let result = '';
  for (let letter of word) {
    for (let key in vowels) {
      if (letter === key) {
        letter = vowels[key];
      }
    }
    result += letter;
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
  let result = '';
  for (let number of word) {
    for (let key in vowels) {
      if (number === key) {
        number = vowels[key];
      }
    }
    result += number;
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
