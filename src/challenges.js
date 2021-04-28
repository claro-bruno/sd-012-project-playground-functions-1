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
  if (distancia1 < 0 && distancia2 < 0) {
    //font Math.abs(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    distancia1 = Math.abs(distancia1);
    distancia2 = Math.abs(distancia2);
  } else if (distancia2 < 0 && distancia1 > 0) {
    distancia2 = Math.abs(distancia2);
  } else if (distancia1 < 0 && distancia2 > 0) {
    distancia1 = Math.abs(distancia1);
  }
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
  let fizz = "fizz";
  let buzz = "buzz";
  let both = "fizzBuzz";
  let bug = "bug!";
  for (index = 0; index < arrayNumbers.length; index += 1) {
    // fonte Number.isInteger: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    if (Number.isInteger(arrayNumbers[index] / 3) === true && Number.isInteger(arrayNumbers[index] / 5) === true) {
      result.push(both);
    } else if (Number.isInteger(arrayNumbers[index] / 3) === true && Number.isInteger(arrayNumbers[index] / 5) === false) {
      result.push(fizz);
    } else if (Number.isInteger(arrayNumbers[index] / 5) === true && Number.isInteger(arrayNumbers[index] / 3) === false) {
      result.push(buzz);
    } else {
      result.push(bug);
    }
  }
  return result
}

// Desafio 9
function encode(string) {
  encodeString = string.split('')
  for (index = 0; index < encodeString.length; index += 1) {
    if (encodeString[index] === 'a') {
      encodeString[index] = 1;
    } else if (encodeString[index] === 'e') {
      encodeString[index] = 2;
    } else if (encodeString[index] === 'i') {
      encodeString[index] = 3;
    } else if (encodeString[index] === 'o') {
      encodeString[index] = 4;
    } else if (encodeString[index] === 'u') {
      encodeString[index] = 5;
    }
  }
  encodeString = encodeString.join('')
  return encodeString;
}

function decode(string) {
  decodeString = string.split('')
  for (index = 0; index < decodeString.length; index += 1) {
    if (decodeString[index] == '1') {
      decodeString[index] = 'a';
    } else if (decodeString[index] == '2') {
      decodeString[index] = 'e';
    } else if (decodeString[index] == '3') {
      decodeString[index] = 'i';
    } else if (decodeString[index] == '4') {
      decodeString[index] = 'o';
    } else if (decodeString[index] == '5') {
      decodeString[index] = 'u';
    }
  }
  decodeString = decodeString.join('')
  return decodeString;
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
