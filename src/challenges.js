// Desafio 1
function compareTrue(cond1, cond2, cond3, cond4) {
  // seu código aqui
  let result = false;
  if ((cond1 === cond2) && (cond3 === cond4)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
  let result = [];

  return result;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

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
// eslint-disable-next-line no-unused-vars
function encode(string) {
  // seu código aqui
  let result = '';
  for (let letra of string) {
    switch (letra) {
      case 'a':
        letra = '1';
        break; 
      case 'e':
        letra = '2';
        break; 
      case 'i':
        letra = '3';
        break; 
      case 'o':
        letra = '4';
        break; 
      case 'u':
       letra = '5';
       break; 
      default:
        break;
    }
    result = result + letra;
  }

  return result;
}

function decode(string) {
  // seu código aqui
  let result = '';
  for (let letra of string) {
    switch (letra) {
      case '1':
        letra = 'a';
        break; 
      case '2':
        letra = 'e';
        break; 
      case '3':
        letra = 'i';
        break; 
      case '4':
        letra = 'o';
        break; 
      case '5':
       letra = 'u';
       break; 
      default:
        break;
    }
    result = result + letra;
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
