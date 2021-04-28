// Desafio 1
function compareTrue(value1, value2) {
  /*
  &&
  receba 2 valores boleanos
  retorn true ou false
  */
  if (value1 && value2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  /*
  receba valor de base
  receba valor de altura
  return calculo da area
  formula (base * altura) / 2
   */
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(stringToSplit) {
  /*
  recebe "string"
  return = [array, de, strings] separadas
  */
  return stringToSplit.split(' ');
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(arrayDeStrings) {
  /*
  concatenacao +
  recebe = [array, de, strings]
  return "string" 'ÚLTIMO ITEM, PRIMEIRO ITEM' independente do tamanho da array
  .length
  VOLTAR AQUI DEPOIS
  */
}

// Desafio 5
function footballPoints(wins, ties) {
  /*
  calculo
  recebe numero de vitorias wins = 3pontos
  receba numero de empates ties = 1ponto
  return qntde de pontos
  */
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
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
