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
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < dist2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
  if (dist1 === dist2) {
    return "os gatos trombam e o rato foge."
  }
}
console.log(catAndMouse(0, 1, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui LEMBRAR DE USAR OUTRAS FUNÇÕES
}

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
