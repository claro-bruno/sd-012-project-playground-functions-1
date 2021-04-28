// Desafio 1
function compareTrue(valor1, valor2) {
  let resposta = false;
  if (valor1 === true && valor2 === true) {
    resposta = true;
    return resposta;
  } else if (valor1 === false || valor2 === false) {
    resposta = false;
    return resposta;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  let resposta = 0;
  area = (base * altura) / 2;
  return area;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  let array =  [];
  array = string.split(" "); // separa a string de acordo com o caracter entre "aspas"
  return array;
}
console.log(splitSentence("Vamo que Vamo"));

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  let primeiroUltimo = ultimoNome + ", " + primeiroNome;
  //let primeiroUltimo = [];
  //primeiroUltimo[0] = primeiroNome;
  //primeiroUltimo[1] = ultimoNome;
  return primeiroUltimo;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let totalPoints = wins + ties;
  return totalPoints;
}
console.log(footballPoints(7, 3));

// Desafio 6
function highestCount(maiorInteiro) {
  let tamanho = maiorInteiro.length;
  let maior = -999;
  let conta = 0;
  for (let index = 0; index <= tamanho; index += 1) {
    if (maior < maiorInteiro[index]) {
      maior = maiorInteiro[index];
    };
  };
  for (let index = 0; index <= tamanho; index +=1) {
    if (maior === maiorInteiro[index]) {
      conta = conta += 1;
    };
  };
  return conta;
}
console.log(highestCount([0, 0, 0]));

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
