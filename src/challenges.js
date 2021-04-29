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
function highestCount(array) {
  for (accountant = 0; accountant<array.length; accountant+=1){
    if (array[accountant] > highNumber) {
      highNumber = array[accountant]
    }
  }
  for (accountant = 0; accountant<array.length; accountant+=1){
  if (highNumber === array[accountant]) {
    repeat +=1
  }  
}
return repeat
}
let repeat = 0
let highNumber = 0
highestCount([9, 1, 2, 3, 9, 5, 7])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2){
    return "cat1" 
  }
  else if (cat1 > cat2){
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}
catAndMouse (0,6,6)
//   if (cat1 > cat2){
//     return cat1
//   }
//   else if {
//     (cat1 < cat2){
//     return cat2
//   }
//   else if (cat1 === cat2) {
//     return "os gatos trombam e o rato foge"
//   }
// }


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
