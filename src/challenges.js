// Desafio 1
function compareTrue(bool, bool2) {
  if (bool === true && bool2 === true) {
    return true;
  } else {
    return false;
  };
};

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
};

console.log(calcArea(51, 1));

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
    };
  };
  finalArray.push(actualWord);
  return finalArray;
};

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayOfStrings) {
  let finalString = '';

  finalString = `${(arrayOfStrings[arrayOfStrings.length - 1])}, ${(arrayOfStrings[0])}`;
  
  return finalString;
};

console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = victoryPoints + tiePoints;

  return totalPoints;
};

console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggestValue = arrayOfNumbers[0];
  let count = 0;
  for (let index = 1; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > biggestValue) {
      biggestValue = arrayOfNumbers[index];
    };
  };
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === biggestValue) {
      count += 1;
    };
  };
  return count;
};

console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  };
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  };
  
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
};

console.log(catAndMouse(0, -6, 6));

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
    };
  };
  return arr;
};

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
