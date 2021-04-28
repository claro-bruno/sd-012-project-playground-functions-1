// Desafio 1 - Verificação de números pares
function compareTrue(valor1, valor2) {
  if (valor1 % 2 == 0 && valor2 % 2 == 0) {
    return('true');
  }
  else {
    return('false');
  }
}
console.log(compareTrue(89,56));
console.log(compareTrue(73,11));
console.log(compareTrue(98,42));



// Desafio 2 - Cálculo da área do triângulo
function calcArea(base, height) {
 return ((base * height) / 2);
}
console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));



// Desafio 3
let array = [ ];

function splitSentence(frase) {
 return

  }
}
console.log(splitSentence('go Trybe'))


// Desafio 4  
let array = [ ];

function concatName (array) {
  return array[array.length - 1] + ', ' + array[0];  
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties; 
}
console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
