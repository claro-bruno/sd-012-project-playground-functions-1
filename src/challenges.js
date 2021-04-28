// Desafio 1
function compareTrue(valorBoolean_1, valorBoolean_2) {
  // seu código aqui
  if((valorBoolean_1 === true)&&(valorBoolean_2 === true)) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let result;

  result = (base*heigth)/2;
  
  return result;
}
//console . log (calcArea(10, 50));

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
