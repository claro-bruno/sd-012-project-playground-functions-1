// Desafio 1
function compareTrue(estaDeNoite, estouComSono) {
  if (estaDeNoite && estouComSono === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base*height)/2;
  return result;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}
// Desafio 4
let array = [];
function concatName(array) {
    let primeiroItem = array[array.length -1];
    let ultimoItem = array[0]
  return `${primeiroItem}, ${ultimoItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins*3) + ties)
  return points
}

// Desafio 6
let array2 = [1, 2, 3, 4, 9, 7, 8, 9, 2]
function highestCount(array2) {
  let contador = 0
  array2.sort()
  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] === array2[array2.length -1]) {
      contador +=1
    }
  }
  return contador
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  let vencedor = '';
  if (distanciaGato1 > distanciaGato2) {
    vencedor = 'cat2';
  } else if (distanciaGato1 < distanciaGato2) {
    vencedor = 'cat1';
  } else {
    vencedor = 'os gatos trombam e o rato foge';
  }
  return  vencedor
}
// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  for (let indexFizzBuzz = 0; indexFizzBuzz < arrayFizzBuzz.length; indexFizzBuzz += 1) {
    if (arrayFizzBuzz[indexFizzBuzz] % 3 === 0 && arrayFizzBuzz[indexFizzBuzz] % 5 !== 0) {
      arrayFizzBuzz[indexFizzBuzz] = 'fizz';
    } else if (arrayFizzBuzz[indexFizzBuzz] % 3 !== 0 && arrayFizzBuzz[indexFizzBuzz] % 5 === 0) {
      arrayFizzBuzz[indexFizzBuzz] = 'buzz'
    } else if (arrayFizzBuzz[indexFizzBuzz] % 3 === 0 && arrayFizzBuzz[indexFizzBuzz] % 5 === 0) {
      arrayFizzBuzz[indexFizzBuzz] = 'fizzBuzz';
    } else {
      arrayFizzBuzz[indexFizzBuzz] = 'bug!';
    }
  }
  return arrayFizzBuzz 
}

// Desafio 9
 //https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
function encode(stringEncode) {
  let stringEncodedA = stringEncode.replace(/a/g, '1');
  let stringEncodedAE = stringEncodedA.replace(/e/g, '2');
  let stringEncodedAEI = stringEncodedAE.replace(/i/g, '3');
  let stringEncodedAEIO = stringEncodedAEI.replace(/o/g, '4');
  let stringEncodedAEIOU = stringEncodedAEIO.replace(/u/g, '5'); 
 
  return stringEncodedAEIOU
}
function decode(stringDecode) {
  let stringDecoded1 = stringDecode.replace(/1/g, 'a');
  let stringDecoded12 = stringDecoded1.replace(/2/g, 'e');
  let stringDecoded123 = stringDecoded12.replace(/3/g, 'i');
  let stringDecoded1234 = stringDecoded123.replace(/4/g, 'o');
  let stringDecoded12345 = stringDecoded1234.replace(/5/g, 'u');
  return stringDecoded12345 
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
