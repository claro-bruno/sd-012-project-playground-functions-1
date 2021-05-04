// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  let rescompare

  if (val1 == true && val2 == true) {
    rescompare = true;
  } else {
    rescompare = false;
  }

  return rescompare;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  let rescalc = (base * height) / 2;

  return rescalc;

}

// Desafio 3
function splitSentence(valSentence) {
  // seu código aqui
  let resSentence = valSentence.split(' ');

  return resSentence;

}

// Desafio 4
function concatName(val) {
  // seu código aqui

  let firstWord = val[0];
  let lastWord = val[(val.length) - 1];
  let resArray = `${lastWord}, ${firstWord}`;

  return resArray;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let resPoints = (wins * 3) + (ties * 1);

  return resPoints;

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
