// Desafio 1
function compareTrue(parametro1, parametro2) {
  if(parametro1 === true && parametro2 === true) { 
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2);
}
// console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  return (string.split(' '));
}
// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayStrings) {
  let firstItem = arrayStrings[0];
  let lastItem = arrayStrings[arrayStrings.length - 1];
  return (lastItem + ', ' + firstItem); 
}
// console.log (concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins + 1*ties);
}
// console.log(footballPoints(0,0));

// Desafio 6
function highestCount(numbersArray) {
  function highestValue(numbersArray) {
    let highestValue = 0;
    for (let index = 0; index < numbersArray.length; index+=1){
      if (highestValue < numbersArray[index]){
        highestValue = numbersArray[index];
      };
    };
    return highestValue;
  }

  let numberOfTimes = 0;
  let highestValue2 = highestValue(numbersArray);
  for (let counting = 0; counting < numbersArray.length; counting+=1){
    if (highestValue2 === numbersArray[counting]){
      numberOfTimes += 1;
    };
  };
  return (numberOfTimes);
}
// console.log(highestCount([0, 0, 0]));

// // Desafio 7
// function catAndMouse() {
//   // seu código aqui
// }

// // Desafio 8
// function fizzBuzz() {
//   // seu código aqui
// }

// // Desafio 9
// function encode() {
//   // seu código aqui
// }
// function decode() {
//   // seu código aqui
// }

module.exports = {
  calcArea,
  // catAndMouse,
  compareTrue,
  concatName,
  // decode,
  // encode,
  // fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
