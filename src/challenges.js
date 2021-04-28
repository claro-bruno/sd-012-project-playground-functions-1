// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let substr = '';
  let rtn = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      substr += str[index];
    } else {
      rtn.push(substr);
      substr = '';
    }
  }
  rtn.push(substr);
  return rtn;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let rep = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      rep += 1;
    } else if (array[index] > maior) {
      maior = array[index];
      rep = 1;
    }
  }
  return rep;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  if (distCat1 < 0) {
    distCat1 *= -1;
  }
  let distCat2 = mouse - cat2;
  if (distCat2 < 0) {
    distCat2 *= -1;
  }
  if ((distCat1) === (distCat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if ((distCat1) < (distCat2)) {
    return 'cat1';
  }
  return 'cat2';
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
