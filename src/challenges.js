// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(" ");
}
// Desafio 4
function concatName(nome) {
  return (`${nome[nome.length - 1]}, ${nome[0]}`);
  }
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1); 
}
// Desafio 6
function highestCount(Array) {
  let maior = 0;
  let contador = 0;
  for (let index = 0; index < Array.length; index += 1) {
    if (maior < Array[index]) {
      maior = Array[index];
    }
  }
  for (let indexCont in Array){
    if (maior === Array[indexCont]) {
      contador += 1;
  }
  return contador;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let auxCat1 = cat1 - mouse;
  let auxCat2 = cat2 - mouse;
  
  if (Math.abs(auxCat1) < Math.abs(auxCat2)) {
    return 'cat1';
  } else if (Math.abs(auxCat2) < Math.abs(auxCat1)) {
    return 'cat2';
  } else {
  return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(Array) {

  let stringResultado = [];

  for (let index = 0; index < Array.length; index += 1) {
    if((Array[index] % 3 === 0) && (Array[index] % 5 !== 0)) {
      stringResultado.push('fizz');
    } else if ((Array[index] % 3 !== 0) && (Array[index] % 5 === 0)) {
      stringResultado.push('buzz');
    } else if ((Array[index] % 3 === 0) && (Array[index] % 5 === 0)) {
      stringResultado.push('fizzBuzz');
    } else {
      stringResultado.push('bug!');
    }
  }
  return stringResultado;
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
