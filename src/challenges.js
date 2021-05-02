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
function highestCount() {
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
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
    } else if (matriz[index] % 5 === 0) {
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
    switch (variavel.substr(index,1)) {
      case 'a':
        caracter = '1';
        break;
      case 'e':
        caracter = '2';
        break;
      case 'i':
        caracter = '3';
        break;
      case 'o':
        caracter = '4';
        break;
      case 'u':
        caracter = '5';
        break;
      default:
        caracter = variavel.substr(index,1);
    }
    resposta += caracter;
  }
  return resposta;
}

function decode(variavel) {
  let caracter = '';
  let resposta = '';
  for (let index = 0; index < variavel.length; index += 1) {
    switch (variavel.substr(index,1)) {
      case '1':
        caracter = 'a';
        break;
      case '2':
        caracter = 'e';
        break;
      case '3':
        caracter = 'i';
        break;
      case '4':
        caracter = 'o';
        break;
      case '5':
        caracter = 'u';
        break;
      default:
        caracter = variavel.substr(index,1);
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
