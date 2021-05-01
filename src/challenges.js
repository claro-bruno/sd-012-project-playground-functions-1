// Desafio 1
function compareTrue(bool, bool2) {
  let success = true;
  if (bool === true && bool2 === true) {
    success = true;
  } else {
    success = false;
  }
  return success;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(str) {
  let finalArray = [];
  let actualWord = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      actualWord += str[index];
    } else {
      finalArray.push(actualWord);
      actualWord = '';
    }
  }
  finalArray.push(actualWord);
  return finalArray;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let finalString = '';
  finalString = `${(arrayOfStrings[arrayOfStrings.length - 1])}, ${(arrayOfStrings[0])}`;
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = victoryPoints + tiePoints;

  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggestValue = arrayOfNumbers[0];
  let count = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === biggestValue) {
      count += 1;
    } else if (arrayOfNumbers[index] > biggestValue) {
      biggestValue = arrayOfNumbers[index];
      count = 0;
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  let arr = [];
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] % 3 === 0 && arrNumbers[index] % 5 === 0) {
      arr.push('fizzBuzz');
    } else if (arrNumbers[index] % 3 === 0) {
      arr.push('fizz');
    } else if (arrNumbers[index] % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push('bug!');
    }
  }
  return arr;
}

// Desafio 9
function encode(str) {
  let returnString = '';
  let encoder = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === 'a' || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u') {
      returnString += encoder[str[index]];
    } else {
      returnString += str[index];
    }
  }
  return returnString;
}

function decode(str) {
  let returnString = '';
  let encoder = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '1' || str[index] === '2' || str[index] === '3' || str[index] === '4' || str[index] === '5') {
      returnString += encoder[str[index]];
    } else {
      returnString += str[index];
    }
  }
  return returnString;
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
