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
