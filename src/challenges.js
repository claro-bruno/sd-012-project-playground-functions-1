// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
   }else{
    return false;
   }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
 let palavras = frase.split(" ")
 return palavras
}

// Desafio 4
function concatName(array) {
  let palavras = array.reverse()
  return palavras[0] +", "+ palavras[array.length -1]
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (3 * wins) + ties;

  return resultado
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  for(let index = 0; index < array.length; index += 1){
    if (array[index] === Math.max(...array)){
     cont ++
    }
  }
    return cont;
  }


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
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
