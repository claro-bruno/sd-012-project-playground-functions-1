// Desafio 1
function compareTrue(bool1, bool2) {
  let saoTrue = false;
  if ((bool1 && bool2) === true) {
    saoTrue = true;
  }
  return saoTrue;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let palavra = '';
  let fraseDividida = [];
  for (let index = 0; index <= string.length; index += 1) {
    if ((string[index] === ' ') || (index === string.length)) {
      fraseDividida.push(palavra);
      palavra = '';
    } else {
      palavra += string[index];
    }
  }
  return fraseDividida;
}

// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString.pop();
  let lastFirstItem = `${lastItem}, ${firstItem}`;
  return lastFirstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsForWin = 3;
  let pointsForTies = 1;
  let totalPointsOfWin = wins * pointsForWin;
  let totalPointsOfTie = ties * pointsForTies;
  let totalPoints = totalPointsOfWin + totalPointsOfTie;
  return totalPoints;
}

// Desafio 6
function higherNumber(arrayNumbers) {
  let numbers = arrayNumbers;
  let higherNum = numbers[0];
  for (let index in numbers) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  return higherNum;
}

function numRepetitions(arrayNumbers, number) {
  let amountRepet = 0;

  for (let index in arrayNumbers) {
    if (number === arrayNumbers[index]) {
      amountRepet += 1;
    }
  }
  return amountRepet;
}

function highestCount(arrayNumbers) {
  let biggerNum = higherNumber(arrayNumbers);
  let repetitions = numRepetitions(arrayNumbers, biggerNum);
  return repetitions;
}

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
