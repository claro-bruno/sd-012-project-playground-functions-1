// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arg) {
  // seu código aqui
  let separate = arg[arg.length - 1]  + ', ' + arg[0];
  return separate;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vit = wins * 3;
  let emp = ties;
  return vit + emp;
}

// Desafio 6
function highestCount(index) {
  // seu código aqui
  let maiorNum = 0;
  let repet = 0;
  for (count = 0; count < index.length; count += 1) {
    if (index[count] > maiorNum) {
      maiorNum = index[count];
    }
  }
  for (count2 = 0; count2 < index.length; count2 += 1) {
    if (maiorNum === index[count2]) {
      repet += 1;
    }
  }
  return repet;
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
