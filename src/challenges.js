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
  let hieghstValue = Math.max(...array);

  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
    if (hieghstValue === array[indexArray]) {
      arrayOcurrenceCount += 1;
    }
  }  

  return arrayOcurrenceCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let quemPegaRato;
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  
  if (distanciaCat1 < distanciaCat2) {
    quemPegaRato = 'cat1'
  }
  else if (distanciaCat1 > distanciaCat2) {
    quemPegaRato = 'cat2'
  }
  else {
    quemPegaRato = 'os gatos trombra e o rato foge';
  }
  return quemPegaRato;
}

// Desafio 8
function fizzBuzz(array) {
  let resultArray = [];

  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {

    if (array[indexArray] % 3 == 0 && array[indexArray] % 5 != 0) {
      resultArray.push('fizz');
    }
    else if (array[indexArray] % 5 == 0 && array[indexArray] % 3 != 0) {
      resultArray.push('buzz');
    }
    else if (array[indexArray] % 5 == 0 && array[indexArray] % 3 == 0) {
      resultArray.push('fizzBuzz');
    }
    else{
      resultArray.push('bug!');
    }
    
  }
  return resultArray;
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
