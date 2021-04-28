// Desafio 1
function compareTrue(bool1, bool2) {
  let saoTrue = false;
  if ((bool1 && bool2) === true) {
    saoTrue = true;
  }
  return saoTrue;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let palavra = '';
  let fraseDividida = [];
  for (let index = 0; index <= string.length; index += 1) {
    if ((string[index] === ' ') || (index === string.length)) {
      fraseDividida.push(palavra);
      palavra = '';
    } else {
      palavra += string[index];
    }
  }
  return fraseDividida;
}

// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString.pop();
  let lastFirstItem = `${lastItem}, ${firstItem}`;
  return lastFirstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsForWin = 3;
  let pointsForTies = 1;
  let totalPointsOfWin = wins * pointsForWin;
  let totalPointsOfTie = ties * pointsForTies;
  let totalPoints = totalPointsOfWin + totalPointsOfTie;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumero) {
  let maiorNumero = arrayNumero[0];
  let repeticoes = 0;
  for (let index in arrayNumero) {
    if (arrayNumero[index] > maiorNumero) {
      maiorNumero = arrayNumero[index];
    }
  }
  for (let index in arrayNumero) {
    if (maiorNumero === arrayNumero[index]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
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
