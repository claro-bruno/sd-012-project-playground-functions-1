// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if (valor1 === true && valor2 === true) {
    return true;
  } if (valor1 === true && valor2 === false) {
    return false;
  } if (valor1 === false && valor2 === true) {
    return false;
  } if (valor1 === false && valor2 === false) {
    return false;
  }
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2  
}
console.log(calcArea(5,2));

// Desafio 3
function splitSentence(string) {
  // seu código aqui

  return string.split(' ')
}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string3 = array[array.length - 1];
  let string0 = array[0];
  let resultado = string3 + ', ' + string0;
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferras', 'Paolilo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
 let pontos = wins * 3 + ties * 1;
  return pontos;
}
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(valor) {
  // seu código aqui
  let maiorNumero = 0
  let repete = 0
  for (index = 0; index < valor.length; index +=1) {
  if (valor[index] > maiorNumero){
    maiorNumero = valor[index]
  }
}
  for (index = 0; index < valor.length; index +=1) {
  if (maiorNumero === valor[index]){
    repete +=1
  }
}
return repete;
}
console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
let distanciaCat1 = Math.abs(cat1 - mouse)
let distanciaCat2 = Math.abs(cat2 - mouse)

 if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
 } if (distanciaCat2 > distanciaCat1) {
   return 'cat1';
 } else {
   return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(5, 11, 11))
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
