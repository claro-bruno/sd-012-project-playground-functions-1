// Desafio 1
function compareTrue(boolean1, boolean2) {
  let value;
  if (boolean1 && boolean2) {
    value = true;
  } else {
    value = false;
  }
  return value;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  let string = '';
  string = arrayName[arrayName.length - 1] + ', ' + (arrayName[0]);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(valores) {
  let numeroMaior = valores[0];
  let contador = 0;
  for (let num = 0; num < valores.length; num += 1) {
    if (valores[num] > numeroMaior) {
      numeroMaior = valores[num];
    }
  }
  for (let num2 = 0; num2 < valores.length; num2 += 1) {
    if (valores[num2] === numeroMaior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valorDeRetorno;
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    valorDeRetorno = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    valorDeRetorno = 'cat2';
  } else {
    valorDeRetorno = 'os gatos trombam e o rato foge';
  }
  return valorDeRetorno;
}

// Desafio 8
function fizzBuzz(numeros) {
  let retorno = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if ((numeros[index] % 3 === 0) && (numeros[index] % 5 === 0)) {
      retorno.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      retorno.push('fizz');
    } else if ((numeros[index] % 5 === 0)) {
      retorno.push('buzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
