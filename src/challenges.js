// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 && bool2) {
    return true;
  }
  if (!bool1 || !bool2) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let words = [];
  let word = '';
  for (let index = 0; index < (frase.length); index += 1) {
    if (frase[index] !== ' ') {
      word += frase[index];
    } else {
      words.push(word);
      word = '';
    }
  }
  if (word !== '') {
    words.push(word);
    word = '';
  }

  return words;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  return `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = 0;
  for (let index = 0; index < wins; index += 1) {
    winsPoints += 3;
  }
  return (winsPoints + ties);
}

// Auxiliar do desafio 6
function numberCountVerify(highestNumber, numberArray) {
  let numberCount = 0;
  for (let numberIndex = 0; numberIndex < numberArray.length; numberIndex += 1) {
    if (numberArray[numberIndex] === highestNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  let highestNumber = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index];
    }
  }
  return numberCountVerify(highestNumber, numberArray);
}

// Desafio 7
function catAndMouse(mouse, cat2, cat1) {
  // seu código aqui
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  if ((cat1 - mouse) === (cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
