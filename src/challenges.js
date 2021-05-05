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
function catAndMouse(mouse,cat1,cat2) {
  let distanciaCat1 = mouse - cat1;
  if(distanciaCat1 < 0){
    distanciaCat1 *= -1;
  }
  let distanciaCat2 = mouse - cat2;
  if(distanciaCat2 < 0){
    distanciaCat2 *= -1;
  }
  if((distanciaCat1) === (distanciaCat2)){
    return "os gatos trombam e o rato foge";
  }
  if ((distanciaCat1) < (distanciaCat2)){
    return "cat1";
  }
  return "cat2";
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let index = 0; index < array.length; index +=1){
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)){
      fizzBuzzArray.push('fizzbuzz');
    } else if ((array[index] % 3 === 0) && (array[index] % 5 !== 0)){
      fizzBuzzArray.push('fizz');
  } else if ((array[index] % 3 !== 0) && (array[index] % 5 === 0)){
    fizzBuzzArray.push('buzz');
} else {
  fizzBuzzArray.push('bug!');
}
  }
  return fizzBuzzArray;
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
