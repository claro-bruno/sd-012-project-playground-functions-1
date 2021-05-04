// Desafio 1
function compareTrue(valor1, valor2) {
//   // seu código aqui
  let resultado;
 if (valor1 === true && valor2 === true){
    resultado = true;
 } else {
    resultado = false;
 }
  return resultado;
};
console.log(compareTrue(3,3));


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  if(base > 0 && height > 0) {
    area = (base * height) /2;
  }
  return area;
};


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let divisao = string.split(" ");
  return divisao;
};


// Desafio 4
let concatenacaoDaString = ["Lucas", "Cassiano," "Ferraz", "Paolillo"];
function concatName(string) {
  
  for (let index = 0; index <= string.length; index++) {
    concatenacaoDaString = string[index] + "," +
  };
  return concatenacaoDaString;

};
console.log(concatName(concatenacaoDaString));

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
