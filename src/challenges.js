// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
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
