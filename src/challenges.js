
// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aquii
  if (valor1 === valor2 && valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = [];
  resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let concatenacao = [];
  for (let index = 0; index < arrayString.length; index += 1) {
    concatenacao = arrayString[index] + ', ' + arrayString[0];
  }
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let wins2 = wins * 3;
  let resultado = wins2 + ties;
  return resultado;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maior = 0;
  let vezes = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maior) {
      maior = arrayNumeros[index];
      vezes = 0;
    }
    if (arrayNumeros[index] === maior) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let resultado = [];
  for (let index in numeros) {
    if (numeros[index] % 3 !== 0 && numeros[index] % 5 !== 0) {
      resultado.push('bug!');
    } else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      resultado.push('buzz');
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let letras = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let array = frase.split('');
  for (let index in frase) {
    if (Object.hasOwnProperty.call(letras, array[index])) {
      array[index] = letras[frase[index]];
    }
  }
  return array.join('');
}

function decode(fraseNumerica) {
  // seu código aqui
  let numeros = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let array = fraseNumerica.split('');
  for (let index in fraseNumerica) {
    if (Object.hasOwnProperty.call(numeros, array[index])) {
      array[index] = numeros[fraseNumerica[index]];
    }
  }
  return array.join('');
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
