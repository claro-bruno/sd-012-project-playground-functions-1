// Desafio 1
function compareTrue(booleano1, booleano2) {
  // seu código aqui
  let resultado = null;
  if (booleano1 === true && booleano2 === true) {
    resultado = true
  } else {
    resultado = false
  };
  return resultado;
};


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array1 = string;
  let array2 = [];
  let palavras = '';
  for (let indice1 = 0; indice1 < array1.length; indice1 += 1) {
    if (array1[indice1] != ' ')
      palavras = palavras + array1[indice1];
    else {
      array2.push(palavras);
      palavras = '';
    };

  };
  array2.push(palavras);
  return array2;
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  let stringcompleta = ''
  let indiceultimo = (array.length) - 1
  stringcompleta = array[indiceultimo] + ', ' + array[0]

  return stringcompleta;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totaldepontos = (wins * 3) + (ties * 1);
  return totaldepontos;

}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiornumero = null;
  let numero1 = null;
  let numero2 = null;
  for (indice1 = 0; indice1 < array.length; indice1 += 1) {
    numero1= array[indice1];

    for (indice2 = 0; indice2 < array.length; indice2 += 1) {
      numero2 = array[indice2];
      if (numero1>numero2) {
       maiornumero==numero1;
      }
      else {
        maiornumero==numero2
      }
    };
  };
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
