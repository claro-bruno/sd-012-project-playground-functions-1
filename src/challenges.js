// funcão auxiliar para o desafio 6:
const MaiorElemento = (arr) => {
  let maior = 0;

  arr.forEach(element => {
    if (element > maior) {
      maior = element;
    };
  });

  return maior;
};

// Desafio 1
function compareTrue(bool1, bool2) { return (bool1 && bool2) };

// Desafio 2
function calcArea(base, height) { return ((base * height) / 2) }

// Desafio 3
function splitSentence(str) { return str.split(" ") };

// Desafio 4
function concatName(arr) { return `${arr[arr.length - 1]}, ${arr[0]}` };

// Desafio 5
function footballPoints(wins, ties) { return ((wins * 3) + ties) };

// Desafio 6
function highestCount(arr) {
  let contador = 0;
  let maiorNum = MaiorElemento(arr);

  arr.forEach(element => {
    if (element == maiorNum) {
      contador++;
    };
  });

  return contador;
};

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
