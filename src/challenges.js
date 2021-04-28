// Desafio 1
function compareTrue(num1, num2) {
  let result = false;
  if (num1 === true && num2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(name1) {
  let resultado = '';
  resultado += name1[name1.length - 1] + ', ' + name1[0];
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(number) {
  let result = 0;
  for (let index = 0; index < number.length; index += 1) {
    for (let cont = 0; cont < number.length; cont += 1) {
      if (number[index] === number[cont]) {
        result += 1;
      }
    }
    return result;
  }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
