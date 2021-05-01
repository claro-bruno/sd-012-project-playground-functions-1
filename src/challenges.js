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
};

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let totalPontos = pontosVitoria + pontosEmpate;
  return totalPontos;
};

// Desafio 6
function highestCount(arrayNumeros) {
  let numeroMaior = 0;
  for(let index = 0; index <= arrayNumeros.length; index += 1){
    if (arrayNumeros[index] === Math.max(...arrayNumeros)){
      numeroMaior +=1;
    };
  };
  return numeroMaior
};
// console.log(highestCount([1, 2, 3, 4, 6, 9, 9]))


// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  let distCat1 = Math.abs(posMouse - posCat1);
  let distCat2 = Math.abs(posMouse - posCat2);
  if (distCat1 < distCat2){
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
};
//console.log(catAndMouse( 8, 12, 4))

// Desafio 8
function fizzBuzz(arrNumeros) {
  let saida = [];
  for (let index = 0; index < arrNumeros.length ; index += 1){
    if ((arrNumeros[index]) % 5 === 0 && (arrNumeros[index]) % 3 === 0){
      saida.push ('fizzBuzz');
    } else if ((arrNumeros[index]) % 3 === 0){
      saida.push ('fizz');
    } else if ((arrNumeros[index]) % 5 === 0){
      saida.push ('Buzz');
    } else {
      saida.push('bug!');
    };
  } return saida
};
//console.log(fizzBuzz([7, 9, 15, 30, 50]))

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
