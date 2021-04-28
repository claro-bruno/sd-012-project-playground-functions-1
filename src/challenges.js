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
  return `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
