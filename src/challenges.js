// Desafio 1
function compareTrue(bool1Compare, bool2Compare) {
  return (bool1Compare && bool2Compare);
}

// Desafio 2
function calcArea(baseTriangulo, aulturaTriangulo) {
  return ((baseTriangulo * aulturaTriangulo) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let arrayStrings = [];
  let palavra = '';
  for (let index = 0; index <= (frase.length); index += 1) {
    if ((frase[index] !== ' ') && (index !== frase.length)) {
      palavra += frase[index];
    } else {
      arrayStrings.push(palavra);
      palavra = '';
    }
  }
  return arrayStrings;
}

// Desafio 4
function concatName(listaNomes) {
  return `${listaNomes[((listaNomes.length) - 1)]}, ${listaNomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNum) {
  let contHigh = 1;
  let numHigh = arrayNum[0];
  for (let index = 1; index < (arrayNum.length); index += 1) {
    if (numHigh === arrayNum[index]) {
      contHigh += 1;
    }
    if (numHigh < arrayNum[index]) {
      numHigh = arrayNum[index];
      contHigh = 1;
    }
  }
  return contHigh;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  let d1 = Math.abs(positionMouse - positionCat1);
  let d2 = Math.abs(positionMouse - positionCat2);
  if (d1 < 2) { return 'cat1'; }
  if (d2 < d1) { return 'cat2'; }
  if (d1 === d2) { return 'os gatos trombam e o rato foge'; }
}

// Desafio 8
function changeFizzbuzz(status) {
  switch (status) {
  case 0:
    return 'bug!';
  case 1:
    return 'fizz';
  case 10:
    return 'buzz';
  case 11:
    return 'fizzBuzz';
  default:
  }
}
function fizzBuzz(arrayNum) {
  let status = 0;
  for (let index = 0; index < (arrayNum.length); index += 1) {
    status = 0;
    if ((arrayNum[index] % 3) === 0) { status += 1; }
    if ((arrayNum[index] % 5) === 0) { status += 10; }
    arrayNum[index] = changeFizzbuzz(status);
  }
  return arrayNum;
}

// Desafio 9
function encode(frase) {
  // alterado conforme sugestão de colega para que possa assim atender o lint.
  frase = frase.replace(/a/gi, '1');
  frase = frase.replace(/e/gi, '2');
  frase = frase.replace(/i/gi, '3');
  frase = frase.replace(/o/gi, '4');
  frase = frase.replace(/u/gi, '5');
  return frase;
}
function decode(frase) {
    // alterado conforme sugestão de colega para que possa assim atender o lint.
  frase = frase.replace(/1/g, 'a');
  frase = frase.replace(/2/g, 'e');
  frase = frase.replace(/3/g, 'i');
  frase = frase.replace(/4/g, 'o');
  frase = frase.replace(/5/g, 'u');
  return frase;
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
