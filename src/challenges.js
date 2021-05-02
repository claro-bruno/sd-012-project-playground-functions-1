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
  let arrayNumber = arrayNumberInput.sort();
  let maior = arrayNumber[arrayNumber.length - 1];
  let contador = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (maior === arrayNumber[index]) {
      contador += 1;
    }
  }
  return contador;
}
// console.log(highestCount([1, 2, 7, 7, 4, 4, 4]));
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
    }
    if (arrayOfNumber[index] % 3 !== 0 && arrayOfNumber[index] % 5 === 0) {
      arrayOfNumber[index] = 'buzz';
    }
    if (arrayOfNumber[index] % 3 === 0 && arrayOfNumber[index] % 5 === 0) {
      arrayOfNumber[index] = 'fizzBuzz';
    } else {
      arrayOfNumber[index] = 'bug!';
    }
  }
  return arrayOfNumber;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui // usar split() // tentar objetos
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
