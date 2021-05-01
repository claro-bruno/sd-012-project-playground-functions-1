// Desafio 1
function compareTrue(first, second) {
  return first === true && second === true;
}

// Desafio 2
function calcArea(base, height) {
  return (Number(base) && Number(height)) ? ((base * height) / 2) : 'Not a Number';
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.length > 0 ? sentence.split(' ') : 'string empyt';
}

// Desafio 4
function concatName(arStr) {
  return arStr.length >= 1 ? `${arStr[arStr.length-1]}, ${arStr[0]}` : "array too short";
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
