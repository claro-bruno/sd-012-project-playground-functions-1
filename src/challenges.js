// Desafio 1
function compareTrue(param1, param2) {
  let comparation = false;
  if (param1 === true && param2 === true) {
    comparation = true;
  }
  return comparation;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concatArray;
  concatArray = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
  return concatArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (3 * wins) + ties;
  return score;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = Number.NEGATIVE_INFINITY;
  let frequencyOfTheHighest = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === highestNumber) {
      frequencyOfTheHighest += 1;
    }
  }
  return frequencyOfTheHighest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catcher;
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    catcher = 'cat2';
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    catcher = 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    catcher = 'os gatos trombam e o rato foge';
  }
  return catcher;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 !== 0) {
      fizzBuzzArray[index] = 'fizz';
    } else if (numbersArray[index] % 3 !== 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzArray[index] = 'buzz';
    } else if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzArray[index] = 'fizzBuzz';
    } else {
      fizzBuzzArray[index] = 'bug!';
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let stringArray = string.split('');
  for (let index = 0; index < stringArray.length; index += 1) {
    if (index === stringArray.indexOf('a')) {
      stringArray[stringArray.indexOf('a')] = 1;
    }
    if (index === stringArray.indexOf('e')) {
      stringArray[stringArray.indexOf('e')] = 2;
    }
    if (index === stringArray.indexOf('i')) {
      stringArray[stringArray.indexOf('i')] = 3;
    }
    if (index === stringArray.indexOf('o')) {
      stringArray[stringArray.indexOf('o')] = 4;
    }
    if (index === stringArray.indexOf('u')) {
      stringArray[stringArray.indexOf('u')] = 5;
    }
  }
  let codedString = stringArray.join('');
  return codedString;
}

function decode(string) {
  let stringArray = string.split('');
  for (let index = 0; index < stringArray.length; index += 1) {
    if (index === stringArray.indexOf('1')) {
      stringArray[stringArray.indexOf('1')] = 'a';
    }
    if (index === stringArray.indexOf('2')) {
      stringArray[stringArray.indexOf('2')] = 'e';
    }
    if (index === stringArray.indexOf('3')) {
      stringArray[stringArray.indexOf('3')] = 'i';
    }
    if (index === stringArray.indexOf('4')) {
      stringArray[stringArray.indexOf('4')] = 'o';
    }
    if (index === stringArray.indexOf('5')) {
      stringArray[stringArray.indexOf('5')] = 'u';
    }
  }
  let codedString = stringArray.join('');
  return codedString;
}

function techList(array, name) {
  if (array.length != 0) {
    let ordenedArray = array.sort();
    let techList = [];
    for (let index = 0; index < ordenedArray.length; index += 1) {
      let techListItem = {tech: ordenedArray[index], name: name};
      techList.push(techListItem);
    }
    return techList;
    } else {
    return 'Vazio!'
  }
}
console.log(techList([], 'Lucas'));

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
