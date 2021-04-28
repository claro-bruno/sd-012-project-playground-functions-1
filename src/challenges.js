// Desafio 1
function compareTrue(boolean1, boolean2){
  if(boolean1 && boolean2){
      return true;
  } else{
      return false;
  };
}

// Desafio 2
function calcArea(base, height){
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string){
  return string.split(' ');
}

// Desafio 4
function concatName(arrayName){
  let novaArray = [];
  novaArray.push(arrayName[arrayName.length -1]);
  novaArray.push(arrayName[0]);
  return novaArray;
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
