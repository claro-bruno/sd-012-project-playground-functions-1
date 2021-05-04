// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  let rescompare

  if (val1 && val2) {
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
function highestCount(valCount) {
  // seu código aqui

  let highestNumber = Math.max.apply(null, valCount);

  let count = 0;

  for (let number = 0; number < valCount.length; number += 1) {

    if (valCount[number] === highestNumber) {

      count += 1;

    }

  }

  return count;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let cat1Distance = Math.abs(cat1 - mouse);

  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance === cat2Distance) {

    return 'os gatos trombam e o rato foge';

  } if (cat1Distance > cat2Distance) {

    return 'cat2';

  } if (cat1Distance < cat2Distance) {

    return 'cat1';

  }

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
