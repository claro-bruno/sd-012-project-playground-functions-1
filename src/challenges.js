// Project: Playground Functions - Aluna: Renata Pereira Nunes
// -------------------------------------------------------------

// Desafio 1
function compareTrue(parameter1, parameter2) {
  let answer;
  if(parameter1 && parameter2){
    answer = true;
  }
  else{
    answer = false;
  };
  return answer;
};

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/2;
};

console.log(calcArea(51, 1));

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
