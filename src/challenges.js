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
function highestCount(arrayNumbers) {
  let numbers = arrayNumbers;
  let maiorNumero = numbers[0];
  let repeticoes = 0;
  for (let index1 in numbers) {
    if (numbers[index1] > maiorNumero) {
      maiorNumero = numbers[index1];
    }
  }
  for (let index2 in numbers) {
    if (maiorNumero === numbers[index2]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let resposta;
  if (distanceCat1 < distanceCat2) {
    resposta = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
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
