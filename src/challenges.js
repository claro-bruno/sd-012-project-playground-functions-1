// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  area = (base * heigth) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 25.5));

// Desafio 3
function splitSentence(inputFrase) {
  splitOut = inputFrase.split(' ');
  return splitOut;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayStrings) {
  let array1 = arrayStrings[0];
  let arrayLast = arrayStrings[arrayStrings.length - 1];
  let LastFirst = arrayLast + ',' + ' ' + array1;
  return LastFirst;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolilo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  points = 3 * wins + 1 * ties;
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNum) {
  let aux = [-3];
  let howManyTimes = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] > aux) {
      aux = arrayNum[index];
    }
  }
  for (let index2 = 0; index2 < arrayNum.length; index2 += 1) {
    if (arrayNum[index2] == aux) {
      howManyTimes += 1;
    }
  }
  return howManyTimes;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(1, 7, 13));
console.log(catAndMouse(-1, -1, -1));

// Desafio 8
function fizzBuzz(numbers) {
  let auxFizzBuzz = [];
  for (let indexRight = 0; indexRight < numbers.length; indexRight += 1) {
    if (numbers[indexRight] % 3 === 0 && numbers[indexRight] % 5 === 0) {
      auxFizzBuzz.push('fizzBuzz');
    } else if (numbers[indexRight] % 3 === 0) {
      auxFizzBuzz.push('fizz');
    } else if (numbers[indexRight] % 5 === 0) {
      auxFizzBuzz.push('buzz');
    } else {
      auxFizzBuzz.push('bug!');
    }
  }
  return auxFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(code) {
  let encodeVar = code.split('');
  for (let indexCode = 0; indexCode < encodeVar.length; indexCode += 1) {
    if (encodeVar[indexCode] === 'a') {
      encodeVar[indexCode] = 1;
    } else if (encodeVar[indexCode] === 'e') {
      encodeVar[indexCode] = 2;
    } else if (encodeVar[indexCode] === 'i') {
      encodeVar[indexCode] = 3;
    } else if (encodeVar[indexCode] === 'o') {
      encodeVar[indexCode] = 4;
    } else if (encodeVar[indexCode] === 'u') {
      encodeVar[indexCode] = 5;
    }
  }
  return encodeVar.join('');
}
console.log(encode('hi there!'));

function decode(uncode) {
  let decodeVar = uncode.split('');
  for (let indexUncode = 0; indexUncode < decodeVar.length; indexUncode += 1) {
    if (decodeVar[indexUncode] === '1') {
      decodeVar[indexUncode] = 'a';
    } else if (decodeVar[indexUncode] === '2') {
      decodeVar[indexUncode] = 'e';
    } else if (decodeVar[indexUncode] === '3') {
      decodeVar[indexUncode] = 'i';
    } else if (decodeVar[indexUncode] === '4') {
      decodeVar[indexUncode] = 'o';
    } else if (decodeVar[indexUncode] === '5') {
      decodeVar[indexUncode] = 'u';
    }
  }
  return decodeVar.join('');
}
console.log(decode('h3 th2r2!'));

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
