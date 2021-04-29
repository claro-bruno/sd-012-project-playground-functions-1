// Desafio 1

function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
  return true
  } else {
    return false
  }
}
// console.log(compareTrue(false, false));


// Desafio 2

function calcArea(base, height){
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));


// Desafio 3

function splitSentence(string){
  return string.split(' ');
}

// Desafio 4

function concatName(arrayStrings) {
  let ultimoItem = arrayStrings[arrayStrings.length - 1];
  let primeiroItem = arrayStrings[0];
  let stringFinal = ultimoItem + ", " + primeiroItem;
  return stringFinal;

}

// console.log(concatName( ['captain', 'my', 'captain']))

// Desafio 5

function footballPoints(wins, ties) {
  let winsPoints= wins * 3
  return winsPoints + ties
}
// console.log(footballPoints(0,0))

// Desafio 6

function highestCount(array){
  let maxNumbers = Math.max(...array);
  let counter = 0;
    for (index = 0; index < array.length ; index += 1){
            if (maxNumbers === array[index]){
             counter += 1      
    } 
  }
   return counter
}

// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let result1 = Math.abs(cat1 - mouse) 
  let result2 = Math.abs(cat2 - mouse) 
  if (result1 < result2){
    return 'cat1';
  } else if (result2 < result1) {
      return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}
//  console.log(catAndMouse(-8,-12,12))

// Desafio 8

let arrayFinal = [];
function fizzBuzz(array) {

  for (index = 0; index < array.length; index += 1) {
   
    if((array[index]) % 3 === 0 && (array[index] % 5) === 0 ){
    arrayFinal.push('fizzBuzz')

    }
    
    else if (( array[index] % 5) === 0 ) {
    arrayFinal.push('buzz')

    }  

    else if ( (array[index] % 3) === 0 ) {
    arrayFinal.push('fizz')

    }

    else arrayFinal.push('bug !')

  }  
return arrayFinal
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
