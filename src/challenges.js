// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 === true && valor2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('foguete'))

// Desafio 4
function concatName(arrayStrings) {
  let firstString = arrayStrings[0];
  let lastString = arrayStrings[arrayStrings.length - 1];
  return (lastString + ', ' + firstString);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let times = 0;
  let highestNumber = 0;
  for (index in numbers) {
    for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
      if (numbers[index] > highestNumber) {
        highestNumber = numbers[index];
      }
    }
  }
  for (index in numbers) {
    if (numbers[index] === highestNumber) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
  // pesquisar funcao ABS(retorna falor absoluto)
}

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
