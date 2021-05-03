// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfString = string.split(' ');
  return arrayOfString;
}
// console.log(splitSentence('vamo que vamo', ' '))

// Desafio 4
function concatName(arrayString) {
  let firstStriElem = arrayString[0];
  let lastStriElem = arrayString[arrayString.length - 1];
  let concatenacao = `${lastStriElem}, ${firstStriElem}`;
  return concatenacao;
}
// console.log(concatName(['carlo', 'luiz', 'jaci']));
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// console.log(footballPoints(1, 2))
// Desafio 6
function highestCount(arrayNumberInput) {
//  let arrayNumber = arrayNumberInput.sort();
  let maiorAtual = arrayNumberInput[0];
  for (let index = 1; index < arrayNumberInput.length; index += 1) {
    if (arrayNumberInput[index] > maiorAtual) {
      maiorAtual = arrayNumberInput[index]
    }
  }
  let contador = 0;
  for (let index = 0; index < arrayNumberInput.length; index += 1) {
    if (maiorAtual === arrayNumberInput[index]) {
      contador += 1;
    }
  }
  return contador;
}
// console.log(highestCount([-2, -2, -1]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(1, 0, 16));

// Desafio 8
function fizzBuzz(arrayOfNumber) {
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] % 3 === 0 && arrayOfNumber[index] % 5 !== 0) {
      arrayOfNumber[index] = 'fizz';
    } else if (arrayOfNumber[index] % 3 !== 0 && arrayOfNumber[index] % 5 === 0) {
      arrayOfNumber[index] = 'buzz';
    } else if (arrayOfNumber[index] % 3 === 0 && arrayOfNumber[index] % 5 === 0) {
      arrayOfNumber[index] = 'fizzBuzz';
    } else {
      arrayOfNumber[index] = 'bug!';
    }
  }
  return arrayOfNumber;
}
// Desafio 9
function encode(string1) {
  let string = string1.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string[index] = 1;
    } else if (string[index] === 'e') {
      string[index] = 2;
    } else if (string[index] === 'i') {
      string[index] = 3;
    } else if (string[index] === 'o') {
      string[index] = 4;
    } else if (string[index] === 'u') {
      string[index] = 5;
    }
  }
  return string.join('');
}
function decode(string2) {
  let string = string2.split('');
  //let string = parseInt(string3);
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      string[index] = 'a';
    } else if (string[index] === '2') {
      string[index] = 'e';
    } else if (string[index] === '3') {
      string[index] = 'i';
    } else if (string[index] === '4') {
      string[index] = 'o';
    } else if (string[index] === '5') {
      string[index] = 'u';
    }
  }
  let newString = string.join('');
  return newString;
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
