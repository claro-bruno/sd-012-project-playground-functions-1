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

// Desafio 8
const divisibleOrNot = (x) => {
  if (x % 3 === 0 && x % 5 === 0) {
    return 'fizzBuzz';
  } if (x % 3 === 0) {
    return 'fizz';
  } if (x % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
};

function fizzBuzz(numeros) {
  let result = [];
  for (let i of numeros) {
    result.push(divisibleOrNot(i));
  }
  return result;
}

// Desafio 9.1
function encode(palavra) {
  let replace = palavra.replace(/[aeiou]/gi, function (x) {
    switch (x) {
    default:
      return '1';
    case 'e':
      return '2';
    case 'i':
      return '3';
    case 'o':
      return '4';
    case 'u':
      return '5';
    }
  });
  return replace;
}

// Desafio 9.2
function decode(palavra) {
  let decodeLetter = ['a', 'e', 'i', 'o', 'u'];
  let decodeNumber = ['1', '2', '3', '4', '5'];
  let newPalavra = '';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === '1' || palavra[i] === '2' || palavra[i] === '3' || palavra[i] === '4' || palavra[i] === '5') {
      for (let j = 0; j < decodeNumber.length; j += 1) {
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
