// Desafio 1
function compareTrue(num1, num2) {
  if (num1 < num2 && num2 > num1) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let resposta = [];
  resposta.push(array[array.length - 1]);
  resposta.push(array[0]);
  return resposta;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let contadorNumeroQueMaisSeRepete = 0;

  for (let varredura2 = 0; varredura2 < array.length; varredura2 += 1) {
      let contador = 0;
      for (let varredura1 = 0; varredura1 < array.length; varredura1 += 1) {
          if (array[varredura2] === array[varredura1]) {
              contador += 1;
          }
          if (contador > contadorNumeroQueMaisSeRepete) {
              contadorNumeroQueMaisSeRepete = contador;
          }
      }
  }
  return contadorNumeroQueMaisSeRepete;
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
