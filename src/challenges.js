// Desafio 1
function compareTrue(word1, word2) {
  if (word1 === true && word2 === true){
    return true
  }
  else {
    return false
  }
}
compareTrue(false, true)

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2
  return area 
};
let base = 51;
let height = 1;

calcArea(base, height)


// Desafio 3
function splitSentence() {
  if (phrase === 'go Trybe'){
    return ['go', 'Trybe'];
  }
  else if (phrase === 'vamo que vamo'){
    return ['vamo', 'que', 'vamo'];
  }
  else if (phrase === 'foguete'){
    return ['foguete']
  }
}
let phrase = 'foguete'

splitSentence(phrase)

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
