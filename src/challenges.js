// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(" ");
 
  return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  let lastPosition = array[array.length -1];
  let firstPosition = array[0];
  let result = lastPosition + ', ' + firstPosition;
 
  return result;
}


// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties;

  let totalPoints = pointsWins + pointsTies;

  return totalPoints;
}
// Desafio 6
function highestCount(array) {
  let arrayOcurrenceCount = 0;

  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
    

  }
  
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let quemPegaRato;
  if (mouse - cat1 < mouse - cat2) {
    quemPegaRato = 'cat1';
  }
  else if (mouse - cat1 > mouse - cat2) {
    quemPegaRato = 'cat2';
  }
  else {
    quemPegaRato = 'os gatos trombam e o rato foge';
  }
  return quemPegaRato;
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
