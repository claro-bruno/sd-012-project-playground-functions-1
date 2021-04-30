// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

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
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs (mouse - cat1);
  let distCat2 = Math.abs (mouse - cat2);
  if (distCat1 > distCat2){
    return 'cat2';
  } else if (distCat2 > distCat1){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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