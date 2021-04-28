// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === valor2 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayNomes) {
  let stringNomes = (`${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`);
  return stringNomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function getHighestNumber(arrayCount) {
  let maior = arrayCount[0];
  for (let key in arrayCount) {
    if (maior < arrayCount[key]) {
      maior = arrayCount[key];
    }
  }
  return maior;
}
function getNumberRepeater(arrayCount) {
  let repete = 0;
  let maior = getHighestNumber(arrayCount);
  for (let key in arrayCount) {
    if (maior === arrayCount[key]) {
      repete += 1;
    }
  }
  return repete;
}
function highestCount(arrayCount) {
  // Descobrindo o Maior Numero
  getHighestNumber(arrayCount);
  // Descobrindo quantas vezes se repete
  return getNumberRepeater(arrayCount);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (Math.abs(cat1Distance) < Math.abs(cat2Distance)) {
    return 'cat1';
  } else if (Math.abs(cat1Distance) > Math.abs(cat2Distance)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayBuzz) {
  let resultado = [];
  for (let key in arrayBuzz) {
    if (arrayBuzz[key] % 3 === 0 && arrayBuzz[key] % 5 !== 0) {
      resultado.push('fizz');
    } else if (arrayBuzz[key] % 5 === 0 && arrayBuzz[key] % 3 !== 0) {
      resultado.push('buzz');
    } else if (arrayBuzz[key] % 3 === 0 && arrayBuzz[key] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayBuzz[key] % 3 !== 0 && arrayBuzz[key] % 5 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(toEncode) {
  let codificado = '';
  for (let key in toEncode) {
    if (toEncode[key] === 'a' || toEncode[key] === 'e' || toEncode[key] === 'i' || toEncode[key] === 'o' || toEncode[key] === 'u') {
      switch (toEncode[key]) {
      case 'a':
        codificado += '1';
        break;
      case 'e':
        codificado += '2';
        break;
      case 'i':
        codificado += '3';
        break;
      case 'o':
        codificado += '4';
        break;
      case 'u':
        codificado += '5';
        break;
      }
    } else {
      codificado += toEncode[key];
    }
  }
  return codificado;
}

function decode(toDecode) {
  let decodificado = '';
  for (let key in toDecode) {
    if (toDecode[key] === '1' || toDecode[key] === '2' || toDecode[key] === '3' || toDecode[key] === '4' || toDecode[key] === '5') {
      switch (toDecode[key]) {
      case '1':
        decodificado += 'a';
        break;
      case '2':
        decodificado += 'e';
        break;
      case '3':
        decodificado += 'i';
        break;
      case '4':
        decodificado += 'o';
        break;
      case '5':
        decodificado += 'u';
        break;
      }
    } else {
      decodificado += toDecode[key];
    }
  }
  return decodificado;
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
