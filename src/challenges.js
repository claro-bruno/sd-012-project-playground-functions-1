// Desafio 1
function compareTrue(numero1, numero2) {
  // seu código aqui
  return numero1 % 2 == 0 && numero2 % 2 == 0
}


// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(" ");
  return palavras;
}

// Desafio 4
function concatName(nomeCompleto) {
  // seu código aqui
  let nome = nomeCompleto.split(" ");
  let firstName = nome[0];
  let lastName = nome[nome.length - 1];
  return lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount() {
  // seu código aqui
  let numeros = [9, 1, 2, 3, 9, 5, 7];
  let maiorNumero = Math.max(numeros)
  let contador = 0

  for (let index = 0; index <= numeros.length; index += 1){
    if (maiorNumero == numeros[index]){
      contador ++
    };
  };
  return contador;
}

console.log(highestCount());

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
