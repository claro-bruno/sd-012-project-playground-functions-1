// Desafio 1
function compareTrue(parameter1, parameter2) {
  if(parameter1 && parameter2 == true){
    return (true);
  } else {
    return (false);
  }
}

// console.log(compareTrue(true, true));
// console.log(compareTrue(true, false));
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
} 

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence (string) {
  return string.split(' ');
}

// console.log(splitSentence("go Trybe"));
// console.log(splitSentence("vamo que vamo"));
// console.log(splitSentence("foguete"));

// Desafio 4
function concatName(strings) {
  let array = strings;
  return (array[array.length -1]) + ', ' + (array[0]);
}

strings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(strings));
strings =  ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(strings));
strings = ['captain', 'my', 'captain'];
console.log(concatName(strings));

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
