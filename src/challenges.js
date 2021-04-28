// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));

console.log('==================================================');

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}
console.log(calcArea(10, 50));

console.log('==================================================');

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for (let caractere = 0; caractere < string.length; caractere += 1) {
    if (string[caractere] !== ' ') {
      palavra = palavra + string[caractere];
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  array.push(palavra);
  return array
}
console.log(splitSentence("go Trybe"));

console.log('==================================================');

// Desafio 4
function concatName(array) {
  // seu código aqui
  let nomes = array[0];
  for (let index = 1; index < array.length; index += 1) {
    nomes = nomes + ', ' + array[index];
  }
  return nomes;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

console.log('==================================================');

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8));

console.log('==================================================');


// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior=array[0];
  let cont = 0;
  for (let index=0; index<array.length; index+=1) {
      if (maior<array[index]) {
          maior=array[index];
      }
  }
  for (let index=0; index<array.length; index+=1) {
    if (array[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

console.log('==================================================');


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
