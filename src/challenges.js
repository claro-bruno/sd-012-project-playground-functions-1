// Desafio 1
function compareTrue(boolean1, boolean2) {
  if ( boolean1 === true && boolean2 === true){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/2;
  return areaTriangulo;
};

// Desafio 3
function splitSentence(frase) {
  let arrayPalavras = frase.split(" ");
  return arrayPalavras;
};

// Desafio 4
function concatName(arrayNomes) {
  let ultimoItem = arrayNomes[arrayNomes.length -1]
  let primeiroItem = arrayNomes[0]
  return ultimoItem + ', ' + primeiroItem;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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
