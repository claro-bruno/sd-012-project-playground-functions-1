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
  cat1 -= - mouse;
  cat2 -= - mouse;
  if (Math.abs(cat1) < Math.abs(cat2)) {
    return 'cat1';
  } else if (Math.abs(cat2) < Math.abs(cat1)) {
    return 'cat2';
  } else {
  return 'os gatos trombam e o rato foge';
  }
}
let Array = [2, 15, 7, 9, 45];
// Desafio 8
function fizzBuzz() {
    
}
console.log (fizzBuzz(Array));

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
