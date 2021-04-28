/* eslint-disable max-len */
/* eslint-disable complexity */
// Desafio 1
// VAMO COMEÇAR!
function compareTrue(param1, param2) {
  return param1 && param2 === true;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  return `${nomes[nomes.length - 1]}, ${nomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
// let numerosEmOrdem = numeros.sort();
function highestCount(numeros) {
  let maiorNumero = Math.max.apply(null, numeros);
  let count = 0;
  for (let i of numeros) {
    if (i === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = Math.abs(cat1 - mouse);
  let cat2Mouse = Math.abs(cat2 - mouse);
  let quemPega;
  if (cat1Mouse < cat2Mouse) {
    quemPega = 'cat1';
  } else if (cat1Mouse > cat2Mouse) {
    quemPega = 'cat2';
  } else {
    quemPega = 'os gatos trombam e o rato foge';
  }
  return quemPega;
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let i of numeros) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzBuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9.1
function encode(palavra) {
  let codeLetter = ['a', 'e', 'i', 'o', 'u'];
  let codeNumber = ['1', '2', '3', '4', '5'];
  let newPalavra = '';
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
      for (let j = 0; j < codeLetter.length; j++) {
        if (palavra[i] === codeLetter[j]) {
          newPalavra += codeNumber[j];
        }
      }
    } else {
      newPalavra += palavra[i];
    }
  }
  return newPalavra;
}

// Desafio 9.2
function decode(palavra) {
  let decodeLetter = ['a', 'e', 'i', 'o', 'u'];
  let decodeNumber = ['1', '2', '3', '4', '5'];
  let newPalavra = '';
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === '1' || palavra[i] === '2' || palavra[i] === '3' || palavra[i] === '4' || palavra[i] === '5') {
      for (let j = 0; j < decodeNumber.length; j++) {
        if (palavra[i] === decodeNumber[j]) {
          newPalavra += decodeLetter[j];
        }
      }
    } else {
      newPalavra += palavra[i];
    }
  }
  return newPalavra;
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
