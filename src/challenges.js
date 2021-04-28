// Desafio 1
function compareTrue(parametOne, parametTwo) {
  // seu código aqui
  if (parametOne === true && parametTwo === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = string.split(' ');
  return frase;
}
// Desafio 4
function concatName(name) {
  // seu código aqui
  let first = name[0];
  let last = name[name.length -1];
  
  return last +', '+ first;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3;
  let empate = 1 * ties;
  let soma = pontos + empate;
  return soma;
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
