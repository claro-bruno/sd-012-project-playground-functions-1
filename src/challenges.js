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
  let ultimoItem = arrayNomes[arrayNomes.length -1];
  let primeiroItem = arrayNomes[0];
  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let totalPontos = pontosVitoria + pontosEmpate;
  return totalPontos;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let numeroMaior = 0;
  for(let index = 0; index <= arrayNumeros.length; index += 1){
    if (arrayNumeros[index] === Math.max(...arrayNumeros)){
      numeroMaior +=1;
    };
  };
  return numeroMaior
}
// console.log(highestCount([1, 2, 3, 4, 6, 9, 9]))


// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  if (posCat1 < posCat2){
    return 'cat1';
  } else if (posCat2 < posCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
//console.log(catAndMouse( 0, 12, 12))
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
