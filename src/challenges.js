// Desafio 1
// VAMO COMEÇAR!
function compareTrue(param1, param2) {
  return param1 && param2 === true;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let n = nomes.length;
  return `${nomes[n - 1]}, ${nomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
// let numerosEmOrdem = numeros.sort();
function highestCount(numeros) {
  let maiorNumero = Math.max.apply(null, numeros);
  let count = 0;
  for (let i of numeros) {
    if (i === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  
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
