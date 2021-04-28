// Desafio 1
function compareTrue(fistBoolean, secondBoolean) {
  if (fistBoolean === true && secondBoolean === true) {
    return 'true';
  } else {
    return 'false';
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(namesArray) {
  let max = array[array.length - 1];
  let min = array[0];
  let string = max + ',' + min
  return string;
}



// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbArrey) {
  let maior = 0;
  let count = 0;
  for (index = 0; index < numbArrey.length; index += 1) {
    if (numbArrey[index] >= maior) {
      maior = numbArrey[index];
    }
  }
  console.log(maior);
  for (index = 0; index < numbArrey.length; index += 1) {
    if (numbArrey[index] == maior) {
      count++;
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
