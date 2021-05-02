// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  let operationCalcArea = (base * height) / 2
  return operationCalcArea
}

// Desafio 3
function splitSentence(fraseDesafio3) {
  let arraySeparada = fraseDesafio3.split(' ');
  return arraySeparada;
}

// Desafio 4
function concatName(arrayString) {

  let finalElement = arrayString[arrayString.length - 1] + ', ' + arrayString[0];

  return finalElement;
}

// Desafio 5
function footballPoints(wins, ties) {

  let points = (wins * 3) + (ties * 1);

  return points;
}

// Desafio 6
function highestCount(arrayDesafio6) {

  let higherNumber = arrayDesafio6[0];

  for (let index = 0; index < arrayDesafio6
    .length; index += 1) {
    if (arrayDesafio6[index] > higherNumber) {
      higherNumber = arrayDesafio6[index];
    } else {
      higherNumber = higherNumber;
    };
  };

  let numberOfRepetitions = 0;

  for (let counter = 0; counter < arrayDesafio6
    .length; counter += 1) {
    if (arrayDesafio6[counter] === higherNumber) {
      numberOfRepetitions += 1;
    };
  };

  return numberOfRepetitions;

}

// Desafio 7 - FALTA
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
    return "cat1";
  } else if (Math.abs(distanciaCat1) === Math.abs(distanciaCat2)) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
};


// Desafio 8
function fizzBuzz(arrayDesafio8) {
  let arrayNova8 = [];
  for (let a = 0; a < arrayDesafio8.length; a += 1) {
    if (arrayDesafio8[a] % 5 == 0 && arrayDesafio8[a] % 3 == 0) {
      arrayNova8.push("fizzBuzz");
    } else if (arrayDesafio8[a] % 5 == 0) {
      arrayNova8.push("buzz");
    } else if (arrayDesafio8[a] % 3 == 0) {
      arrayNova8.push("fizz");
    } else {
      arrayNova8.push("bug!");
    }
  }
  return arrayNova8;
};

// Desafio 9 FALTA
function encode(frase9) {
  let fraseCodificada = frase9.replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return fraseCodificada;
}
console.log(encode(frase9))

function decode(novaFrase) {
  let fraseDecodificada = novaFrase.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return fraseDecodificada;
}

/*
let frase = 'hi there!';

function encode(frase) {

  let fraseSeparada = frase.split('')

  for (let key in fraseSeparada) {
    switch (fraseSeparada[key]) {
      case 'a':
        fraseSeparada[key] = '1';
        break;
      case 'e':
        fraseSeparada[key] = '2';
        break;
      case 'i':
        fraseSeparada[key] = '3';
        break;
      case 'o':
        fraseSeparada[key] = '4';
        break;
      case 'u':
        fraseSeparada[key] = '5';
        break;
    };
  };
  return fraseSeparada.join('');
};

console.log(encode(frase))



let fraseNova = 'hi there!';

function decode(fraseNova) {

  let fraseSeparada = fraseNova.split('')

  for (let key in fraseSeparada) {
    switch (fraseSeparada[key]) {
      case '1':
        fraseSeparada[key] = 'a';
        break;
      case '2':
        fraseSeparada[key] = 'e';
        break;
      case '3':
        fraseSeparada[key] = 'i';
        break;
      case '4':
        fraseSeparada[key] = 'o';
        break;
      case '5':
        fraseSeparada[key] = 'u';
        break;
    };
  };
  return fraseSeparada.join('');
};

console.log(decode(fraseNova))
*/

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
