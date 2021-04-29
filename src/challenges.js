// Desafio 1
function compareTrue(boleano1, boleano2) {
  if (boleano1 === true && boleano2 === true){
  return true;
} return false;
};
console.log(compareTrue(1, 1))
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area; 
};
// Desafio 3
function splitSentence(string) {
  let msg = string.split(' ');
  return msg;
};
// Desafio 4
function concatName(string) {
  let ultimaposicao = string[names.lenght -1]
  let primeiraposicao = string[0];
  return ultimaposicao + ' ' + primeiraposicao;
};
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties 
};

// Desafio 6
function highestCount(numeros) {
let maiornumero = 0;
for (let index in numeros) {
  if (numeros[maiornumero] < numeros[index]) {
    maiornumero = index;
  }
}
return maiornumero;
};

// Desafio 7
function catAndMouse() {
  // seu código aqui
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
};

// Desafio 9
function encode() {
  // seu código aqui
};
function decode() {
  // seu código aqui
};

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
