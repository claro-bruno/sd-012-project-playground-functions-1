// Desafio 1
function compareTrue(boleano1, boleano2) {
  if (boleano1 === true && boleano2 === true) {
    return true;
} return false;
};
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
  let arrayNomes = (`${string[string.length - 1]}, ${string[0]}`);
  return arrayNomes;
};
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties 
};

// Desafio 6
function highestCount(numeros) {
let maiornumero = [0];
  for (let index =0; index < numeros.length; index +=1) {
  if (numeros[maiornumero] > numeros[index]) {
    maiornumero = numeros[index];
  }
}
return maiornumero;
  };
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
};
// Desafio 8
function fizzBuzz() {
  // seu código aqui
};

// Desafio 9
function encode(param1) {
  let Encode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return Encode
};
function decode() {
  let Decode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
    };
    return Decode
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
