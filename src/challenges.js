// Desafio 1
function compareTrue(numb1, numb2) {
  if (numb1 === true && numb2 === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // let string = 'go trybe';
  let array = string.split(' ');
  return array;
}
// console.log(splitSentence('go trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let inicio = array[0];
  let final = array[array.length - 1];
  return final + ',' + inicio;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empates = ties * 1;
  let soma = vitoria + empates;
  return soma;
}
// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = 0;
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
  // if (cat1) {
  // }
}

// Desafio 8
function fizzBuzz() {
  //seu código aqui
  // if (array % 3 === 0) {
  //   console.log('Fizz');
  // } else if (array % 3 === 0) {
  //   console.log('Buzz');
  // } else if (array % 3 === 0 && array % 3 === 0) {
  //   console.log('fizzbuzz');
  // } else {
  //   console.log('Bug');
  // }
  // return array;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
