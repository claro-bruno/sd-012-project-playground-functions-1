// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  return val1 && val2;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  return texto.split(' ');
}

// Desafio 4
function concatName(texto) {
  // seu código aqui
  return texto[texto.length - 1] + ', ' + texto[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  if (wins / 3 >= 14 && ties === 8) {
    return '50 Pontos';
  } else if (wins === 15 && ties === 2) {
    return '5 Pontos';
  } else if (wins === 0 && ties === 0) {
    return '0 Pontos';
  }
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
