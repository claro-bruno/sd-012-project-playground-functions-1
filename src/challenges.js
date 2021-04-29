// Desafio 1
function compareTrue(n1, n2) {
  if (n1.valueOf() === true && n2.valueOf() === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let array = [];
  let string = '';
  for (let index = 0; index < frase.length; index += 1){
    if (frase[index] != ' '){
      string = string + frase[index];
    } else {
      array.push (string);
      string = '';
    }
  };
  array.push (string);
  return array;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(parametro) {
  let resultado = parametro[0] + ', ' + parametro[parametro.length - 1];
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
