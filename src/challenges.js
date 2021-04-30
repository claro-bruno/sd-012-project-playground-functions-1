// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
};
console.log(compareTrue(0, 1));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
};

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(names) {
  let concatNames = [];
  for (let index = 0; index < names.length; index += 1) {
    if (names[index] === names[0] || names[index] === names[names.length - 1]) {
      concatNames.push(names[index]);
    }
  }
  return concatNames.reverse().join(', ');
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0) {
    wins = wins * 3
  }
  if (ties > 0) {
    ties = ties * 1
  }
  let totalPoints = wins + ties
  return totalPoints;
};
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
      highNumber = numbers[index];
    }
  };
  let repeatedCount = 0;
  for (let num in numbers) {
    if (highNumber === numbers[num]) {
      repeatedCount += 1
    }
  };
  return repeatedCount;
};

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whichCat;
  if ((Math.abs((cat1 - mouse))) > Math.abs((cat2 - mouse))) {
    whichCat = 'cat2';
  } else if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    whichCat = 'cat1';
  } else {
      whichCat = 'os gatos trombam e o rato foge'
  };

  return whichCat;
};

console.log(catAndMouse(1, -1, 1));

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      numbers[index] = 'fizzBuzz'
    } else if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz'
    } else if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz'
    } else {
      numbers[index] = 'bug!'
    }
    array.push(numbers[index]);
  };
  return array;
};

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let splitedString = string.split('');
  let encodeName = [];
  for (let letter in splitedString) {
    if (splitedString[letter] === 'a') {
      splitedString[letter] = '1';
    }
    else if (splitedString[letter] === 'e') {
      splitedString[letter] = '2';
    }
    else if (splitedString[letter] === 'i') {
      splitedString[letter] = '3';
    }
    else if (splitedString[letter] === 'o') {
      splitedString[letter] = '4';
    }
    else if (splitedString[letter] === 'u') {
      splitedString[letter] = '5';
    }
    encodeName.push(splitedString[letter])
  };
  return encodeName.join('');
};

console.log(encode('hi there!'));

function decode(string) {
  let splitedString = string.split('');
  let encodeName = [];
  for (let letter in splitedString) {
    if (splitedString[letter] === '1') {
      splitedString[letter] = 'a';
    }
    else if (splitedString[letter] === '2') {
      splitedString[letter] = 'e';
    }
    else if (splitedString[letter] === '3') {
      splitedString[letter] = 'i';
    }
    else if (splitedString[letter] === '4') {
      splitedString[letter] = 'o';
    }
    else if (splitedString[letter] === '5') {
      splitedString[letter] = 'u';
    }
    encodeName.push(splitedString[letter])
  };
  return encodeName.join('');
};

console.log(decode('h3 th2r2!'));

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
