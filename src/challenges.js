// Desafio 1
function compareTrue(par1, par2) {
  return par1 && par2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let resposta = [];
  resposta = frase.split(' ');
  return resposta;
}

// Desafio 4
function concatName(matriz) {
  let resposta = matriz[matriz.length - 1];
  resposta += ', ';
  resposta += matriz[0];
  return resposta;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(matriz) {
  let maior = matriz[0];
  let vezes = 0;
  for (let index = 0; index < matriz.length; index += 1) {
    if (matriz[index] > maior) {
      maior = matriz[index];
      vezes = 1;
    } else
    if (maior === matriz[index]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta = 'os gatos trombam e o rato foge';
  let rato = Math.abs(mouse);
  let gato1 = Math.abs(cat1);
  let gato2 = Math.abs(cat2);
  if ((gato1 === gato2) && ((gato1 - rato) === (gato2 - rato))) {
    return resposta;
  }
  if (Math.abs(gato1 - rato) < Math.abs(gato2 - rato)) {
    resposta = 'cat1';
  }
  if (Math.abs(gato1 - rato) > Math.abs(gato2 - rato)) {
    resposta = 'cat2';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(matriz) {
  let resposta = [];
  let conteudo = '';
  for (let index = 0; index < matriz.length; index += 1) {
    conteudo = 'bug!';
    if (matriz[index] % 3 === 0) {
      conteudo = 'fizz';
      if (matriz[index] % 5 === 0) {
        conteudo = 'fizzBuzz';
      }
    } else
    if (matriz[index] % 5 === 0) {
      conteudo = 'buzz';
    }
    resposta.push(conteudo);
  }
  return resposta;
}

// Desafio 9
function encode(variavel) {
  let caracter = '';
  let resposta = '';
  for (let index = 0; index < variavel.length; index += 1) {
    caracter = variavel.substr(index, 1);
    if (variavel.substr(index, 1) === 'a') {
      caracter = '1';
    }
    if (variavel.substr(index, 1) === 'e') {
      caracter = '2';
    }
    if (variavel.substr(index, 1) === 'i') {
      caracter = '3';
    }
    if (variavel.substr(index, 1) === 'o') {
      caracter = '4';
    }
    if (variavel.substr(index, 1) === 'u') {
      caracter = '5';
    }
    resposta += caracter;
  }
  return resposta;
}

function decode(variavel) {
  let caracter = '';
  let resposta = '';
  for (let index = 0; index < variavel.length; index += 1) {
    caracter = variavel.substr(index, 1);
    if (variavel.substr(index, 1) === '1') {
      caracter = 'a';
    }
    if (variavel.substr(index, 1) === '2') {
      caracter = 'e';
    }
    if (variavel.substr(index, 1) === '3') {
      caracter = 'i';
    }
    if (variavel.substr(index, 1) === '4') {
      caracter = 'o';
    }
    if (variavel.substr(index, 1) === '5') {
      caracter = 'u';
    }
    resposta += caracter;
  }
  return resposta;
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
