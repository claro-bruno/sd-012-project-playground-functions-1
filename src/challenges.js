// Desafio 1
function compareTrue(cond1, cond2) {
  // seu código aqui
  if ((cond1 === true && cond2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(Array) {
  // seu código aqui
 let position1 = Array[0];
 let position2 = Array[Array.length -1];
 return position2 + ', ' + position1
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3)+ties;
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
// eslint-disable-next-line no-unused-vars
function encode(string) {
  // seu código aqui
  let result = '';
  
  return result;
}

function decode(string) {
  // seu código aqui
  let result = '';

  return result;
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
