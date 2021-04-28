// Desafio 1
function compareTrue(valor1, valor2) {
if (valor1 === true && valor2 === true) {
  return true;
} else {
  return false;
}
};

// Desafio 2
function calcArea(base, height) {
  const areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(strName) {
  let concatenadoString = strName[strName.length - 1] + ', ' + strName[0];
  return concatenadoString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties;
  let pontosTotais = pontosWins + pontosTies;
  return pontosTotais;
}

// Desafio 6

function highestCount(mainArray) {
  let maiorNumero = mainArray.reduce(function(a, b) {
    return Math.max(a, b);
  });
  let count = 0;
  for (let key in mainArray) {
    if (maiorNumero === mainArray[key]) {
      count += 1;
    }
  }
  return count;
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
