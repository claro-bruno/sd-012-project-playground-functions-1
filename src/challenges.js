// Desafio 1
function compareTrue(valor1, valor2) {
  let eVerdadeiro = true;
  if (valor1 > 0 && valor2 > 0) {
    return eVerdadeiro;
  } else {
    return eVerdadeiro = false;
  }
};

// Desafio 2
function calcArea(base, altura) {
  let area = 0;
  if (base > 0 && altura > 0){
    area = (base * altura) / 2;
  };
  return area;
};

// Desafio 3
function splitSentence(string) {
  let divisao = string.split(" ");
  return divisao;
};

// Desafio 4
let concatenacaoString = [];
function concatName(string) {
  for (let index = 0; index < string.length; index += 1){
    concatenacaoString = string[index] + ", " + string[0];
  }
  return concatenacaoString;
}

// Desafio 5
let total = 0;
function footballPoints(wins, ties) {
  total = (wins * 3) + (ties);
  return total;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contagem = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] >= maiorNumero){
      maiorNumero = array[index];
    };
  };
  for (let index = 0; index < array.length; index += 1)
    if (array[index] === maiorNumero){
      contagem += 1;
  };
  return contagem;
};
// Desafio 7 rato 10, gato1 4, gato2 22
let foge = "os gatos trombam e o rato foge"
function catAndMouse(mouse, cat1, cat2) {
if (mouse < cat1, cat1 < cat2){
  cat1 = "cat1";
  return cat1;
} else if (mouse < cat2, cat2 < cat1){
  cat2 = "cat2";
  return cat2;
} else {
  cat1 = cat2;
  return foge;
}
}
console.log(catAndMouse(1,5,3));
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
