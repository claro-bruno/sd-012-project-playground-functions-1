// Desafio 1
function compareTrue(firstOperator, secondOperator) {
  if (firstOperator === true && secondOperator === true) {
      return true;
  } else {
      return false;
  }
}
  // Desafio 2
function calcArea(base, height) {
  return (( base * height ) / 2 );
}
// Desafio 3
function splitSentence(string) {
  let words = string.split(" "); //Ref.: https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words#:~:text=Just%20use%20split%20%3A,%22%2C%20%22sentence.%22%5D
  return words;
}
// Desafio 4
function concatName(array) {
  return ("'" + array[(array.length - 1)] + ", " + array[0] + "'");
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