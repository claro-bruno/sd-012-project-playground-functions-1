// Desafio 1
function compareTrue(numb1, numb2) {
  if (numb1 === true && numb2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // let string = 'go trybe';
  let array = string.split(' ');
  return array;
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let inicio = array[0];
  let final = array[array.length - 1];
  return final + ',' + inicio;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let wins = win * 3;
  let ties = ties * 1;
  let soma = wins + ties;
  return soma;
}
console.log(footballPoints());

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  if (array % 3 === 0) return 'fizz';
  if (array % 3 === 0) return 'buzz';
  if (array % 3 === 0 && array % 3 === 0) return 'fizzbuzz';
  return 'bug!';
}
console.log();

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
