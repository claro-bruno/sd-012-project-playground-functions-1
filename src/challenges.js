// Desafio 1
function compareTrue(n1, n2) {

  if (n1 === true && n2 === true) {
    return true;
  } else {
    return false;
  }

}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {

  area = base * height / 2;
  return area;

}
// console.log(calcArea(51,1))

// Desafio 3
function splitSentence(string) {
  let arrays = [];

  arrays = string.split(" ");

  return arrays

}
// console.log(splitSentence("foguete"))

// Desafio 4

function concatName(switchs) {

  let conq = [];

  for (index = 0; index < switchs.length; index += 1) {
    conq = switchs[index] + ',' + switchs[0];
  }
  return conq;

}

//console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {

  wins = 3 * wins;
  ties = 1 * ties;

  let fut = wins + ties;

  return fut;
}

// console.log(footballPoints(14,8))

// Desafio 6

function highestCount(VezesMaiorNumeroAparece) {

  let maiorNumero = 0;
  let vezesAparece = 0;

  for (let index = 0; index < VezesMaiorNumeroAparece.length; index += 1) {

  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);


  if (distanciaCat1 < distanciaCat2) {
    return 'cat1'
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }

}

 console.log(catAndMouse(0,3,2))

// Desafio 8
function fizzBuzz() {

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
