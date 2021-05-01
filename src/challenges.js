// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * eight) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let fraseDividida = sentence.split(' ');
  return fraseDividida;
}

// Desafio 4
function concatName(array) {
  let ultimoElemento = array[array.length - 1];
  let primeiroElemento = array[0];

  return ultimoElemento + ', ' + primeiroElemento;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3 * wins;
  let empates = 1 * ties;
  let totalPontos = vitorias + empates;

  return totalPontos;
}

// Desafio 6
function highestCount(array) {
  let maiorElemento = array[0];
  for (let indice in array) {
    if (maiorElemento < array[indice]){
      maiorElemento = array[indice];
      }
    }
  let contador = 0;
  for (let index = 0; index < array.length; index+= 1){
    if (array[index] === maiorElemento){
      contador += 1;}
    }
  return contador;
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = mouse - cat1;
  let distMouseCat2 = mouse - cat2;
  
  if (distMouseCat1 < 0 || distMouseCat2 < 0){
    if (distMouseCat1 < 0){
      distMouseCat1 = Math.abs(distMouseCat1)}; 
    if (distMouseCat2 < 0){
      distMouseCat2 = Math.abs(distMouseCat2)};
  };
  
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } if (distMouseCat2 < distMouseCat1) {
    return 'cat2';
  } if ( distMouseCat1 === distMouseCat2){
    return 'os gatos trombam e o rato foge';
  };
}

// Desafio 8
function fizzBuzz(arrayNum) {
  
  for (let index = 0; index < arrayNum.length; index += 1){
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 !== 0) {
      arrayNum[index] = "fizz";
    }else if (arrayNum[index] % 3 !== 0 && arrayNum[index] % 5 === 0) {
      arrayNum[index] = "buzz";
    }else if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arrayNum[index] = "fizzBuzz";
    }else if (arrayNum[index] % 3 !== 0 && arrayNum[index] % 5 !== 0) {
      arrayNum[index] = "bug!";
    }
  }
  return arrayNum;
}

// Desafio 9
function encode(frase) {
  let encodedA = frase.replaceAll('a', '1');
  let encodedAE = encodedA.replaceAll('e', '2');
  let encodedAEI = encodedAE.replaceAll('i', '3');
  let encodedAEIO = encodedAEI.replaceAll('o', '4');
  let encodedAEIOU = encodedAEIO.replaceAll('u', '5');

  return encodedAEIOU;
}

function decode(fraseCodificada) {
  let decodedA = fraseCodificada.replaceAll('1', 'a');
  let decodedAE = decodedA.replaceAll('2', 'e');
  let decodedAEI = decodedAE.replaceAll('3', 'i');
  let decodedAEIO = decodedAEI.replaceAll('4', 'o');
  let decodedAEIOU = decodedAEIO.replaceAll('5', 'u');

  return decodedAEIOU;
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