// Desafio 1
function compareTrue(n1, n2) {

  if (n1 === true && n2 === true) {
    return true;
  } else {
    return false;
  }

}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {

area = base * height /2;
return area;

}
// console.log(calcArea(51,1))

// Desafio 3
function splitSentence(string) {
  let arrays = [];

arrays = string.split(" ");

return arrays

}
// console.log(splitSentence("foguete"))

// Desafio 4
function concatName(switchStrings) {
  
let conq = [];

for(index =0;index < switchStrings.length; index +=1) {
  conq = switchStrings[index] + "," + switchStrings[0]
}
return conq;

}

//console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins,ties) {

wins = 3 * wins;
ties = 1 * ties;

let fut = wins + ties;

return fut;
}

// console.log(footballPoints(14,8))

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
