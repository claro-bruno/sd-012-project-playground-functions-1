// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(array) {
  let phrase = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      phrase += `${array[array.length-1]}, `;
    } else if (index === (array.length-1)) {
      phrase += array[0];
    }
  }
  return phrase;
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let hightestIndex = 0;
  for (let index = 1; index < array.length; index +=1) {
    if (array[index] > array[hightestIndex]) {
      hightestIndex = index;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[hightestIndex] === array[index]) {
      count += 1;
    }
  }
  return count;
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
