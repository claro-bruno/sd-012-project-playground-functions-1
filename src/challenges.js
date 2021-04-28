// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean === false) {
    return false;
  }
  if (secondBoolean === false) {
    return false;
  }
  if (firstBoolean === true && secondBoolean === true) {
    return true;
  }
  return 'Error, one of the parameters is not a boolean.';
}
/*
console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));
*/

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
/*
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));
*/

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
/*
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));
*/

// Desafio 4
function concatName(...chosenArray) {
  let response = '';
  return response.concat(chosenArray[0][chosenArray.length - 1], ', ', chosenArray[0][0]);
}
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(...array));
array = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(...array));
array = ['captain', 'hello', 'my', 'captain'];
console.log(concatName(...array));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(...numbers) {
  let singleNumbers = [];
  let timesNumberAppear = [];
  for (const number of numbers) {
    if (singleNumbers.indexOf(number) === -1) {
      singleNumbers.push(number);
    }
  }
  for (let index = 0; index < singleNumbers.length; index += 1) {
    timesNumberAppear.push(0);
    for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
      if (singleNumbers[index] === numbers[secondIndex]) {
        timesNumberAppear[index] += 1;
      }
    }
  }
  return timesNumberAppear[singleNumbers.indexOf(Math.max(...singleNumbers))];
}
/*
let array = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount.apply(null, array));
array = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount.apply(null, array));
array = [0, 0, 0];
console.log(highestCount.apply(null, array));
*/

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 -= mouse;
  cat2 -= mouse;

  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 > cat2) {
    return 'cat2';
  }
  return 'cat1';
}
/*
console.log(catAndMouse(1,7,4));
console.log(catAndMouse(1,7,13));
console.log(catAndMouse(1,3,3));
*/
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
