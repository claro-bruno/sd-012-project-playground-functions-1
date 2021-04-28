// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = base * height / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(array) {
  let firstLast = `${array[array.length-1]}, ${array[0]}`;
  return firstLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let repeatTimes = 0;
  let highestNumber = 0;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
        repeatTimes += 1;
    }
  }
  return repeatTimes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  if (distancia1 < distancia2){
    return "cat1";
  } else if (distancia1 > distancia2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] )
  }
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
