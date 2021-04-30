// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(splitString) {
  let words = splitString.split(' ');
  return words;
}
// Desafio 4
function concatName(strings) {
  let lastAndFirst = `${strings[strings.length - 1]}, ${strings[0]};`;
  return lastAndFirst;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
// Desafio 6
function highestCount(array) {
  let repeticoes = 0;
  let maiorNum = 0;
  for (let num of array) {
    if (num > maiorNum) {
      maiorNum = num;
    }
  }
  for (let key of array) {
    if (key === maiorNum) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);
  if (d1 < d2) {
    return 'cat1';
  } if (d2 < d1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(numbers) {
  let output = [];
  for (let key of numbers){
    switch (numbers)
  }
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
