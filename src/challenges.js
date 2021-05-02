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
  if (d1 < d2) { return 'cat1'; }
  if (d2 < d1) { return 'cat2'; }
  if (d1 === d2) { return 'os gatos trombam e o rato foge'; }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let status = 0;
  let object = { 0: 'bug!', 1: 'fizz', 10: 'buzz', 11: 'fizzBuzz' };
  for (let index = 0; index < (arrayNum.length); index += 1) {
    status = 0;
    if ((arrayNum[index] % 3) === 0) { status += 1; }
    if ((arrayNum[index] % 5) === 0) { status += 10; }
    arrayNum[index] = object(status);
  }
  return arrayNum;
}

// Desafio 9
function encode(frase) {
  // Alterado conforme sugestão do Isaac
  let object = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let array = (frase.split(''));
  for (let index = 0; index < (array.length); index += 1) {
    if (object[array[index]]) { array[index] = object[array[index]]; }
  }
  return array.join('');
}
function decode(frase) {
  // Alterado conforme sugestão do Isaac
  let object = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let array = (frase.split(''));
  for (let index = 0; index < (array.length); index += 1) {
    if (object[array[index]]) { array[index] = object[array[index]]; }
  }
  return array.join('');
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
