// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
   };
  console.log(compareTrue(true, false));


// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
};
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
};
console.log(splitSentence('vamo que vamo'));


// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length-1];
  return  ultimo + ', ' + primeiro;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(0, 0));


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
