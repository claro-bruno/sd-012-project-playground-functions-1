// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  area = (base * heigth) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 25.5));

// Desafio 3
function splitSentence(inputFrase) {
  splitOut = inputFrase.split(' ');
  return splitOut;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayStrings) {
  let array1 = arrayStrings[0];
  let arrayLast = arrayStrings[arrayStrings.length - 1];
  let LastFirst = arrayLast + ',' + ' ' + array1;
  return LastFirst;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolilo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));



// Desafio 5
function footballPoints(wins, ties) {
  points = 3 * wins + 1 * ties;
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 6
function highestCount() {}

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
