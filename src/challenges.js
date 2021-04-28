// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true){
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, false));
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");
}
console.log(splitSentence("Hoje Vai dar boa"));
// Desafio 4
function concatName(array) {
  // seu código aqui
  return (array[array.length - 1] + ", " + array[0]);
}
console.log(concatName(["Pedro", "Luiz", "Augusto"]));
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3*wins + ties);
}
console.log (footballPoints(14, 8));
// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let max = Math.max(numbers);
  let accumulator = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] === max){
      accumulator += 1;
    }
  }
  return max;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
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
