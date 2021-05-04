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
  let numeroMaior = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > numeroMaior) {
      numeroMaior = numeros[index];
    }
  }
  let repeticao = 0;
  for (let index in numeros) {
    if (numeroMaior === numeros[index]) {
      repeticao += 1;
    }
  }
  return repeticao;
}

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
function fizzBuzz(teste) {

  let memoria = [];
  for (let index = 0; index < teste.length; index += 1);
  if (teste[index] % 3 === 0) {
    memoria.push('fizz');
  }
  else if (teste[index] % 5 === 0) {
    memoria.push('buzz');
  }
  else if (teste[index] % 3 === 0 && teste[index] % 5 === 0) {
    memoria.push('fizzBuzz');
  }
  else if (teste[index] % 3 !== 0 && teste[index] % 5 !== 0) {
    memoria.push('bug!');
  }
  return memoria;
}
console.log(fizzBuzz([9, 25]));

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
