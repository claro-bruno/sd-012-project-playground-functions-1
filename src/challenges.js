// Desafio 1
function compareTrue(paran1, paran2) {
  if(paran1 && paran2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let str = sentence;
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length -1].concat(',',' ',array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  return (winPoints * wins) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(unD, unD2) {
  let cat1 = unD;
  let cat2 = unD2;
  if(cat1 < cat2){
    return 'cat1';
  } else if (cat2 < cat1){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for(let number of array){
    if(number % 3 === 0 && number % 5 === 0){
      fizzBuzzArray.push('fizzBuzz');
    }else if(number % 3 === 0){
      fizzBuzzArray.push('fizz');
    }else if(number % 5 === 0){
      fizzBuzzArray.push('buzz')
    }else{
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let stringToArray = string.split('');
  for (let index in stringToArray) {
    if (stringToArray[index] === 'a') {
      stringToArray[index] = 1;
    } else if (stringToArray[index] === 'e') {
        stringToArray[index] = 2;
    } else if (stringToArray[index] === 'i') {
        stringToArray[index] = 3;
    } else if (stringToArray[index] === 'o') {
        stringToArray[index] = 4;
    } else if (stringToArray[index] === 'u') {
        stringToArray[index] = 5;
    }
  }
  return stringToArray.join('');  
}

function decode(string) {
  let stringToArray = string.split('');
  for (let index in stringToArray) {
    if (stringToArray[index] === '1') {
      stringToArray[index] = 'a';
    } else if (stringToArray[index] === '2') {
        stringToArray[index] = 'e';
    } else if (stringToArray[index] === '3') {
        stringToArray[index] = 'i';
    } else if (stringToArray[index] === '4') {
        stringToArray[index] = 'o';
    } else if (stringToArray[index] === '5') {
        stringToArray[index] = 'u';
    }
  }
  return stringToArray.join('');
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
