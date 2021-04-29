// Desafio 1
function compareTrue(cond1, cond2) {
  // seu código aqui
  if ((cond1 === true && cond2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(Array) {
  // seu código aqui
 let position1 = Array[0];
 let position2 = Array[Array.length -1];
 return position2 + ', ' + position1
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3)+ties;
}

// Desafio 6
function highestCount(Array) {
  // seu código aqui
  let numberofTimes = 0;
  for (let index = 0; index < Array.length; index += 1) {
    if (Array[index] === Math.max(...Array)){
      numberofTimes += 1;
    }
  
  }
  return numberofTimes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  Math.abs
}

// Desafio 8
function fizzBuzz(Array) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < Array.length; index += 1) {
    if (Array[index] % 3 === 0 && Array[index] % 5 === 0) {
      result.push ('fizzBuzz');
    }else if (Array[index] % 5 === 0) {
      result.push ('buzz');
    }else if (Array[index] % 3 === 0) {
      result.push ('fizz');
    }else{
      result.push('bug!')
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
}

function decode(string) {
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
