// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(nameToSplit) {
  return nameToSplit.split(' ');  
}

// Desafio 4
function concatName(arrayStringsToConcat) {
  return (`${arrayStringsToConcat[arrayStringsToConcat.length - 1]}, ${arrayStringsToConcat[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties*1);
}

// Desafio 6
function highestCount(arrayToCount) {
  let highestNumber = 0;
  let highestNumberCount = 0;

  for (index = 0; index < arrayToCount.length; index += 1) {
    if (arrayToCount[index] > highestNumber) {
      highestNumber = arrayToCount[index];
      highestNumberCount = 0;
      highestNumberCount += 1;
    } 
    else if (arrayToCount[index] == highestNumber) {
      highestNumberCount += 1;
    } 
  }
  return highestNumberCount;
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

