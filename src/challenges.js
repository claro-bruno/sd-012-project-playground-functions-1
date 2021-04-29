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
function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
  }
 

(splitSentence('vamo que vamo'))

// Desafio 4
function concatName(nomeCompleto) {
for (contador = 0; contador < nomeCompleto.length; contador+=1);{
  nomeCompleto =  (nomeCompleto[nomeCompleto.length - 1] + ',') + ' ' + (nomeCompleto[0]);
}
return nomeCompleto
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let finalResult = wins + ties;
  return finalResult
}
let wins = 14
let ties = 8
footballPoints(wins, ties)

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
