// Desafio 1
function compareTrue(boleano1, boleano2) {
  if (boleano1 === true && boleano2 === true) {
    return true;
  } return false;
};
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
};
// Desafio 3
function splitSentence(string) {
  let msg = string.split(' ');
  return msg;
};
// Desafio 4
function concatName(string) {
  let arrayNomes = (`${string[string.length - 1]}, ${string[0]}`);
  return arrayNomes;
};
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
};

// Desafio 6
function checkHighestCount(numero, maiorNumero, contagem) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
    contagem = 1;
  } else if (numero === maiorNumero) {
    contagem += 1;
  }
  return [maiorNumero, contagem];
}
function highestCount(numeros) {
  let maiornumero = 0;
  let maiornumerorepetir = 0;
  let resultado = [];
  for (let index = 0; index < numeros.length; index += 1) {
    resultado = checkHighestCount(numeros[index], maiornumero, maiornumerorepetir);
    [maiornumero] = resultado;
    maiornumerorepetir = resultado[1];
  }
  return maiornumerorepetir;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  if (distanciaGato1 > distanciaGato2) {
    return "cat2";
  } else if (distanciaGato2 > distanciaGato1) {
    return "cat1";
  } else if (distanciaGato1 === distanciaGato2) {
    return "os gatos trombam e o rato foge";
  }
};
// Desafio 8
function fizzBuzz(array) {
  let string = [];

  for (let index = 0; index < array.length; index += 1) {

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string.push('fizzBuzz');
  } 
    else {
      if (array[index] % 3 === 0) {
        string.push('fizz');
      }

      if (array[index] % 5 === 0) {
        string.push('buzz');
      }

  };

    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      string.push('bug!');
    };
  };

  return string;
};

// Desafio 9
function encode() {

}
function decode() {
};

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
