// Desafio 1
function compareTrue(value, value2) {
  // seu código aqui
  if (value === true && value2 === true) {
    return true;
  } else {
    return false;
  };
};
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height) / 2;
  return area;
};
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  frase1 = frase.split(' ');
  return frase1
};
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(nome) {
  // seu código aqui
  firstName = nome[0];
  lastName = nome[nome.length -1];
  return lastName.concat(', ', firstName);;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins1 = wins * 3;
  ties1 = ties * 1;
  result = wins1 + ties1;
  return result;
}
console.log(footballPoints(14, 8));

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
