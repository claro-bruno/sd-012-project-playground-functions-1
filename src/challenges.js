// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (typeof firstBoolean === 'boolean' && typeof secondBoolean === 'boolean'){
    if (firstBoolean === false) {
      return false;  
    } else {
      if (secondBoolean === false) {
        return false;
      } else {
        return true;    
      };
    };
  };
  return undefined;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(...chosenArray) {
  return chosenArray[0][chosenArray[0].length - 1] + ' , ' + chosenArray[0][0];
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