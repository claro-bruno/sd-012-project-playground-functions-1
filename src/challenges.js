// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
};

// Desafio 3
function splitSentence() {
  // seu código aqui
};

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
};

// Desafio 6
function highestCount() {
  // seu código aqui
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return "os gatos trombam e o rato foge";
  } else if ((mouse - cat1) < (mouse - cat2)) {
    return "cat1";
  } else {
    return "cat2";
  };
};

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index+= 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      resultado.push("fizzBuzz");
    } else if ((array[index] % 3 === 0)) {
      resultado.push("fizz");
    } else if ((array[index] % 5 === 0)) {
      resultado.push("Buzz");
    } else {  
      resultado.push("bug!");
    };
  };
  return resultado;
};

// Desafio 9
function encode() {
  // seu código aqui
};
function decode() {
  // seu código aqui
};

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
