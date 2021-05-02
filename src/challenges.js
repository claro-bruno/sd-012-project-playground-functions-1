// Desafio 1
// let numero1 = true;
// let numero2 = false;

function compareTrue(numero1, numero2) {
  if (numero1 === true && numero2 === true) {
    return (true);
  } else {
    return (false)
  }
}

// Desafio 2

// let base = 10;
// let height = 50;

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(string) {
  return string.split(' ');
  // .split divide uma string em partes.
  // Evita o uso de expressões regulares.
}
// console.log(splitSentence('Waltton Coelho'));



// Desafio 4

function concatName(palavra) {

  // return string.split(' ').reverse(); => A função inverte a frase

  return `${ palavra[palavra.length - 1] }, ${ palavra[0] }`;
  // A função está retornando apenas a primeira letra das palavras.

}

// console.log(concatName('Waltton Clayton Coelho Santos'));



// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(maiorNumero) {

  let maior = Math.max.apply(null, maiorNumero);
  let repet = 0;
  for (let index = 0; index < maiorNumero.length; index += 1) {
    if (maiorNumero[index] === maior) {
      repet += 1;
    }

  }
  return repet;
}
// console.log(highestCount([9,1,2,3,9,5,7, 9]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = Math.abs(mouse - cat1);
  let position2 = Math.abs(mouse - cat2);
  let pega = 0;

  if (position1 === position2) {
    pega = 'os gatos trombam e o rato foge';
  } else if (position1 < position2) {
    pega = 'cat1';
  } else {
    pega = 'cat2';
  }
  return pega;
}
console.log(catAndMouse(1, 2, 2));

// Desafio 8
function fizzBuzz(arrayDiv) {
  for (let index = 0; index < arrayDiv.length; index += 1) {
    if (arrayDiv[index] % 3 === 0 && arrayDiv[index] % 5 === 0) {
      arrayDiv[index] = 'fizzBuzz';
    } else if (arrayDiv[index] % 3 === 0 && arrayDiv[index] % 5 != 0) {
      arrayDiv[index] = 'fizz';
    } else if (arrayDiv[index] % 5 === 0 && arrayDiv[index] % 3 != 0) {
      arrayDiv[index] = 'buzz';
    } else {
      arrayDiv[index] = 'bug!';
    }
  }
  return arrayDiv;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(convert) {
  let vogais = convert.replace(/[aeiou]/g, (letra) => {
    switch (letra) {
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
  return vogais;
}
console.log(encode('aeiou'));

function decode(convert) {
  let numeros = convert.replace(/[12345]/g, (vogais) => {
    switch (vogais) {
      default:
        return 'a';
      case '2':
        return 'e';
      case '3':
        return 'i';
      case '4':
        return 'o';
      case '5':
        return 'u';
    }
  });
  return numeros;
}
console.log(decode('12345'));

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
