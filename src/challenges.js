// Desafio 1
function compareTrue(varBol1, varBol2) {
  // seu código aqui
  let compare = false;
  if (varBol1 === true && varBol2 === true) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let stringReturn = `${array[array.length - 1]}, ${array[0]}`;
  return stringReturn;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui
  let count = 0;
  for (let num = 9; num >= 0; num -= 1) {
    for (let varredura = 0; varredura < arrayNum.length; varredura += 1) {
      if (arrayNum[varredura] === num) {
        count += 1;
      }
    }
    if (count !== 0) {
      break;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1Mouse = Math.sqrt(Math.pow(cat1 - mouse, 2));
  let positionCat2Mouse = Math.sqrt(Math.pow(cat2 - mouse, 2));
  let cases = 'Os gatos trombam e o rato foge';
  if (positionCat1Mouse < positionCat2Mouse) {
    cases = 'Cat1';
  } else if  (positionCat2Mouse < positionCat1Mouse) {
    cases = 'Cat2';
  }
  return cases;
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
