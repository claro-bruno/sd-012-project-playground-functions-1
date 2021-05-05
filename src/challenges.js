// Desafio 1
function compareTrue(bloco1, bloco2) {
  if ( bloco1 === true && bloco2 === true ){
 return true
  } else {
    return false
  }
}


// Desafio 2
function calcArea(base, height) {
  return ( base * height )/ 2;
}


// // Desafio 3

function splitSentence(string) {
  return string.split (' ');
}


// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;

}


// Desafio 5
function footballPoints(win,ties) {
  return (win * 3) + ties;
}

// Desafio 6
function highestCount(retorno) {
  let high = retorno[0];
  let count = 0;
  for (let index in retorno){
    if (retorno[index]>high){
      high = retorno[index];
    }
  }
  for (let index2 in retorno){
    if (high === retorno[index2]){
      count += 1;
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
