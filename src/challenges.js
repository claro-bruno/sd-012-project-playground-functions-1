// Desafio 1

function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
  return true
  } else {
    return false
  }
}
// console.log(compareTrue(false, false));


// Desafio 2

function calcArea(base, height){
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));


// Desafio 3

function splitSentence(string){
  return string.split(' ');
}

// Desafio 4

function concatName(arrayStrings) {
  let ultimoItem = arrayStrings[arrayStrings.length - 1];
  let primeiroItem = arrayStrings[0];
  let stringFinal = ultimoItem + ", " + primeiroItem;
  return stringFinal;

}

// console.log(concatName( ['captain', 'my', 'captain']))

// Desafio 5

function footballPoints(wins, ties) {
  let winsPoints= wins * 3
  return winsPoints + ties
}
// console.log(footballPoints(0,0))

// Desafio 6
function highestCount(array) {
  // for (index = 0; index < array.length ; index += 1){
  // return Math.max(array)
  // }
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 > cat2)
  return 'cat1'
  else if(cat2 > cat1)
  return 'cat2' 
  else return "os gatos trombam e o rato foge"
}
// console.log(catAndMouse(1,6,6))

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
