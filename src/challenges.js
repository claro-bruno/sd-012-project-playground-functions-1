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

  for (let indice of numeros) {
    if (indice % 3 === 0 && indice % 5 === 0) {
      array.push('fizzBuzz');
    } else if (indice % 3 === 0) {
      array.push('fizz');
    } else if (indice % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let novaString = '';
  for (let indice = 0; indice < string.length; indice += 1) {
    if (string[indice] === 'a') {
      novaString += string[indice].replace('a', '1');
    } else if (string[indice] === 'e') {
      novaString += string[indice].replace('e', '2');
    } else if (string[indice] === 'i') {
      novaString += string[indice].replace('i', '3');
    } else if (string[indice] === 'o') {
      novaString += string[indice].replace('o', '4');
    } else if (string[indice] === 'u') {
      novaString += string[indice].replace('u', '5');
    } else {
      novaString += string[indice];
    }
  }
  return novaString;
}

function decode(string) {
  // seu código aqui
  let novaString = '';
  for (let indice = 0; indice < string.length; indice += 1) {
    if (string[indice] === '1') {
      novaString += string[indice].replace('1', 'a');
    } else if (string[indice] === '2') {
      novaString += string[indice].replace('2', 'e');
    } else if (string[indice] === '3') {
      novaString += string[indice].replace('3', 'i');
    } else if (string[indice] === '4') {
      novaString += string[indice].replace('4', 'o');
    } else if (string[indice] === '5') {
      novaString += string[indice].replace('5', 'u');
    } else {
      novaString += string[indice];
    }
  }
  return novaString;
}

// Desafio 13
/* function hydrate(string1) {
  // seu código aqui
  let con = 0;
  let words = string1.split(' ');
  for (let indice = 0; indice < words.length; indice += 1) {
    if (parseInt(words[indice])) {
      con += parseInt(words[indice]);
    }
  }
  return con > 1 ? con + ' copos de água' : con + ' copo de água';
} */

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

// Desafio 10
function arrayFunction(array, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  /* for (let numero of numeros) {
    if (numero < 0 || numero > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else if (numeros.lenght < 10) {
      return 'Array com tamanho incorreto.';
    };
  } */
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
}
