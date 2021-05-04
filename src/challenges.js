// Desafio 1
function compareTrue(parametro01, parametro02) {
  if (parametro01 === true && parametro02 === true) {
    return true;
  }

  return false;
}

console.log(compareTrue(true, true));
// se parametro1 é true e parametro2 é true também então irá retornar true. caso contrario será falso. //
// Desafio 2
function calcArea(base, height) {
  let total = (base * height) / 2;
  return total;
}
console.log(calcArea(51, 1));

// base x altura / 2. Depois só chamar a função //
// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

console.log(splitSentence('go Trybe'));
// Tendo como referência : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split //

// Desafio 4
function concatName(array) {
  let concatena = (`${array[array.length - 1]}, ${array[0]}`);
  return concatena;
}

// https://pt.stackoverflow.com/questions/231359/qual-a-forma-correta-de-concatenar-strings-em-javascript
// https://pt.stackoverflow.com/questions/252089/pegar-a-%C3%BAltima-palavra-de-uma-string-e-coloc%C3%A1-la-no-in%C3%ADcio-com-jquery

// Desafio 5
function footballPoints(wins, ties) {
  let jogo = (3 * wins) + ties;
  return jogo;
}

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = numeros[0];
  for (let index = 1; index < numeros.length; index += 1) {
    if (numeros[index] > numeroMaior) {
      numeroMaior = numeros[index];
    }
  }
  let repeticao = 0;
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros[index2] === numeroMaior) {
      repeticao += 1;
    }
  }
  return repeticao;
}
// console.log(highestCount([15, 9, 10, 1, 9, 150, 150, 10, 10]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// https://www.youtube.com/watch?v=8xqU_hXb-9k
// https://www.javascriptprogressivo.net/2019/01/Tutorial-Objeto-Math-Trabalhando-Matematica-JS.html

// Desafio 8
function fizzBuzz0(numeros) {
  if (numeros % 3 === 0 && numeros % 5 === 0) {
    return 'fizzBuzz';
  }
  if (numeros % 3 === 0) {
    return 'fizz';
  }
  if (numeros % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
// nesse caso foi necessario criar outra function para imprimir o resultado da função
// tentei fazer colocando .push em cada if mas não dá certo
function fizzBuzz(resultado) {
  let total = [];
  for (let numeros of resultado) {
    total.push(fizzBuzz0(numeros));
  }
  return total;
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
