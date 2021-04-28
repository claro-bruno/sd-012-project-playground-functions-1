// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  } else if(param1 != param2) {
    return false;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, altura) {
  let resultado = (base * altura) / 2;
  return resultado;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}
console.log(splitSentence('Vamo que vamo'));

// Desafio 4
function concatName(array) {
  let concatenaNome = (array[array.length - 1]) + ', ' + array[0];
  return concatenaNome;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1)
  return pontuacao;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayNumeros) {
  let repeticoes = 0;
  let maiorNumero = arrayNumeros[0];
  for(let key in arrayNumeros){
    if(arrayNumeros[key] > maiorNumero) {
      maiorNumero = arrayNumeros[key];
    }
  }
  for(let key in arrayNumeros) {
    if(maiorNumero === arrayNumeros[key]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = '';
  if((mouse - cat1) > (mouse - cat2)) {
    return 'cat2';
  } else if ((mouse - cat1) < (mouse - cat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(10, 5, 6));

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let fraseFizzBuzz = [];
  for(let key in arrayNumeros){
    if((arrayNumeros[key]) % 3 === 0 && (arrayNumeros[key]) % 5 > 0){
      fraseFizzBuzz.push ('fizz');
    } else if ((arrayNumeros[key]) % 5 === 0 && (arrayNumeros[key]) % 3 > 0){
      fraseFizzBuzz.push ('buzz');
    } else if ((arrayNumeros[key]) % 3 === 0 && (arrayNumeros[key]) % 5 === 0){
      fraseFizzBuzz.push ('fizzBuzz');
    }else {
      fraseFizzBuzz.push ('bug!');
    }
  }
  return fraseFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
