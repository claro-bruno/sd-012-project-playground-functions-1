// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true ){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
};

// Desafio 4
function concatName(Array) {
  let phrase = Array;
  return  (phrase[phrase.length - 1]) + ', ' + (phrase[0]);
};

// Desafio 5
function footballPoints(wins, ties) {
  let allPoints = wins + ties;
  let points = 0;
  for (index = 0 ; index < allPoints; index ++){
    if(wins > 0){
      wins-= 1;
      points += 3;
    } else if(ties > 0){
      ties-= 1;
      points += 1;
    };
  };
  return points;
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
