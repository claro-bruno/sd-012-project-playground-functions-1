// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
};

console.log(splitSentence('Vamo que vamo'));

// Desafio 4
let array = ['João', 'Maria', 'José', 'Antonio'];

function concatName(procura) {
  let resultado = procura[procura.length -1] + ', ' + procura[0];
  return resultado;
};

console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let vitórias = 3 * wins;
  let resultado2 = vitórias + ties;
  return resultado2;
};

console.log(footballPoints(15, 8));

// Desafio 6

let arrayAlet = [0, 0, 0, 11];

function highestCount(arrayNum) {
  let resultado3 = 0;
  let contagem = [];
  for (let maiorNum = 0; maiorNum < arrayNum.length; maiorNum += 1) {
    resultado3 = arrayNum[maiorNum];
    for (let compara = 0; compara < arrayNum.length; compara += 1) {
      if (arrayNum[maiorNum] < arrayNum[compara] && arrayNum[compara] > resultado3) {
        resultado3 = arrayNum[compara];
      };
    };
    if (resultado3 === arrayNum[maiorNum]) {
      contagem.push(1);
    };
  };
  return contagem.length;
};

console.log(highestCount(arrayAlet));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (distanciaCat1 < 0) {
    distanciaCat1 = distanciaCat1 * -1;
  };

  if (distanciaCat2 < 0) {
    distanciaCat2 = distanciaCat2 * -1;
  };

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
};

console.log(catAndMouse(8, 9, 7));

// Desafio 8

let arrayTeste = [9, 25];

function fizzBuzz(array1) {
  let resultado4 = [];
  for (let index in array1) {
    if (array1[index] % 3 === 0 && array1[index] % 5 === 0) {
      resultado4.push('fizzBuzz');
    } else if (array1[index] % 3 === 0) {
      resultado4.push('fizz');
    } else if (array1[index] % 5 === 0) {
      resultado4.push('buzz');
    } else {
      resultado4.push('bug!');
    };
  };
  return resultado4;
};

console.log(fizzBuzz(arrayTeste));

// Desafio 9

let frase2 = 'Hi there!';

function encode(frase) {
  let codificada = '';
  for (let key = 0; key < frase.length; key += 1) {
    switch (frase[key]) {
      case 'a':
        codificada += 1;
        break;
      case 'e':
        codificada += 2;
        break;
      case 'i':
        codificada += 3;
        break;
      case 'o':
        codificada += 4;
        break;
      case 'u':
        codificada += 5;
        break;
      default:
        codificada += frase[key];
        break;
    };
  };
  return codificada;
};

console.log(encode(frase2));

let fraseCod = 'H3 th2r2!';

function decode(frase3) {
  let decodificada = '';

  for (let index = 0; index < frase3.length; index += 1) {
    switch (frase3[index]) {
      case '1':
        decodificada += 'a';
        break;
      case '2':
        decodificada += 'e';
        break;
      case '3':
        decodificada += 'i';
        break;
      case '4':
        decodificada += 'o';
        break;
      case '5':
        decodificada += 'u';
        break;
      default:
        decodificada += frase3[index];
        break;
    };
  };
  return decodificada;
};

console.log(decode(fraseCod));

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
