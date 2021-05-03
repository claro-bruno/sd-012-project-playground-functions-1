// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  return val1 && val2;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  return texto.split(' ');
}

// Desafio 4
function concatName(texto) {
  // seu código aqui
  return texto[texto.length - 1] + ', ' + texto[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = ((wins * 3) + ties);
  return resultado;
}

// Desafio 6
function highestCount(matriz) {
  // seu código aqui
  let matrizOrganizada = matriz.sort();
  let contar = 0;

  for (let indice = 0; indice <= matriz.length - 1; indice += 1) {
    if (matrizOrganizada[indice] === matrizOrganizada[matrizOrganizada.length - 1]) {
      contar += 1;
    }
  }
  return contar;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let array = [];

  for (let indice = 0; indice <= numeros.length - 1; indice += 1) {
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numeros[indice] % 3 === 0) {
      array.push('fizz');
    } else if (numeros[indice] % 5 === 0) {
      array.push('Buzz');
    } else if (numeros[indice] % 3 !== 0 && numeros[indice] % 5 !== 0) {
      array.push('bug!');
    }
  }
  return array;
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
