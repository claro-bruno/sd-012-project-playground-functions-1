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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if(distanceCat1 > distanceCat2) {
    return ('cat2');
  } else if (distanceCat2 > distanceCat1) {
    return ('cat1');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}
// console.log (catAndMouse(1, 0, 2));

// // Desafio 8
function fizzBuzz(arrayNumbers) {
  let  arrayString = [];

  for(let index  = 0; index < arrayNumbers.length; index +=1) {
      if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0){
      arrayString.push ('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0){
      arrayString.push ('buzz');
    } else if(arrayNumbers[index] % 3 === 0){  
      arrayString.push ('fizz');
    } else {
      arrayString.push ('bug!');
    }
  };
  return arrayString;
  
}
// console.log(fizzBuzz([9, 25]));

// // Desafio 9
function encode(stringParam) {
   let stringCodificada = '';
   let consoante = '';

  for (let index = 0; index < stringParam.length; index += 1){
    if (stringParam[index] === 'a'){
      stringCodificada += '1';
    } else if (stringParam[index] === 'e') {
      stringCodificada += '2';
    } else if (stringParam[index] === 'i') {
      stringCodificada += '3';
    } else if (stringParam[index] === 'o') {
      stringCodificada += '4';
    } else if (stringParam[index] === 'u') {
      stringCodificada += '5';
    } else {
      consoante = stringParam[index];
      stringCodificada += consoante;
    }
  };
  return stringCodificada; 
}
// console.log(encode('hi there!'));

function decode(stringParam2) {
  let stringCodificada2 = '';
  let consoante2 = '';

  for (let index = 0; index < stringParam2.length; index += 1){
    if (stringParam2[index] === '1'){
      stringCodificada2 += 'a';
    } else if (stringParam2[index] === '2') {
      stringCodificada2 += 'e';
    } else if (stringParam2[index] === '3') {
      stringCodificada2 += 'i';
    } else if (stringParam2[index] === '4') {
      stringCodificada2 += 'o';
    } else if (stringParam2[index] === '5') {
      stringCodificada2 += 'u';
    } else {
      consoante2 = stringParam2[index];
      stringCodificada2 += consoante2;
    }
  };
  return stringCodificada2; 
}
// console.log(decode('h3 th2r2!'));

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
