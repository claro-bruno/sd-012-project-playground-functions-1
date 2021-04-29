// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  // teste
  if (val1 && val2 === true){
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = base*height/2;
  return area
}
console.log(calcArea(51,1))
console.log(calcArea(10,50))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = string.split(' ');
  return frase
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  // seu código aqui
 let positionLastArray = array.length
  let lastFirst = array [positionLastArray-1]+',' + " " + array [0];
  return lastFirst;
}
console.log(concatName(['foguete', 'nao', 'tem', 're']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 3*wins + ties;
  return points;
}
console.log (footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let higherNumber = numbers[0];
  let counter = 0;
  for (count = 1; count < numbers.length; count += 1) {
if (numbers[count] > higherNumber) {
  higherNumber = numbers[count];
}
}
 for (count = 0; count < numbers.length; count += 1) {
   if (numbers[count] === higherNumber){
 counter += 1;
   }
  }
  
  
  return counter;
}
console.log (highestCount([2,4,31,31,31,30,4,31,31]))


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
