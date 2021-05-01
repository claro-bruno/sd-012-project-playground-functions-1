// Desafio 1
// let numero1 = true;
// let numero2 = false;

function compareTrue(numero1, numero2) {
  if (numero1 === true && numero2 === true) {
    return (true);
  } else {
    return (false)
  }
}

// Desafio 2

// let base = 10;
// let height = 50;

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(string) {
  return string.split(' ');
  // .split divide uma string em partes.
  // Evita o uso de expressões regulares.
}
// console.log(splitSentence('Waltton Coelho'));



// Desafio 4

function concatName(palavra) {

  // return string.split(' ').reverse(); => A função inverte a frase

  return `${ palavra[palavra.length - 1] }, ${ palavra[0] }`;
  // A função está retornando apenas a primeira letra das palavras.

}

// console.log(concatName('Waltton Clayton Coelho Santos'));



// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(maiorNumero) {

  let maior = Math.max.apply(null, maiorNumero);
  let repet = 0;
  for (let index = 0; index < maiorNumero.length; index += 1) {
    if (maiorNumero[index] === maior) {
      repet += 1;
    }

  }
  return repet;
}
// console.log(highestCount([9,1,2,3,9,5,7, 9]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = mouse - cat1;
  let position2 = mouse - cat2;

  if (position1 === position2) {
    return 'Os catos trombam';
  } else if (position1 < position2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
//console.log(catAndMouse(10, 4, 3));

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
