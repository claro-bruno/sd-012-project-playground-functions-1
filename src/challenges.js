// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  fraseSplitada = string.split(' ');
  return fraseSplitada; 
}

// Desafio 4
function concatName(nomes) {

}

// Desafio 5
function footballPoints(wins, ties) {
  var points;
  points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount() {

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
