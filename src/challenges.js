// Desafio 1
function compareTrue(param1, param2) {
  let resultado;
  if (param1 && param2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  const calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(stringExemplo) {
  let resultado = stringExemplo.split(" ");
  return resultado;
}

// Desafio 4
function concatName(stringExemplo) {
  let valorUm = stringExemplo[0];
  let valorDois = stringExemplo[stringExemplo.length - 1];
  let resultado = valorDois + ", " + valorUm;
  return resultado;
  }

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let resultado = winsPoints + tiesPoints;
  return resultado;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let indexMaior = 0;
  for (let index = 1; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > maiorNumero) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  for (let contador = 0; contador < arrayDeNumeros.length; contador += 1) {
    if (arrayDeNumeros[contador] === maiorNumero) {
      indexMaior += 1;
    }
  }
  return indexMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let distance1 = cat1 - mouse;
 let distance2 = cat2 - mouse;
 let resultado = String;
 if (distance1 < 0) {
   distance1 = distance1 * -1;
 }
 if (distance2 < 0) {
   distance2 = distance2 * -1;
 }
 if (distance1 < distance2) {
  resultado = 'cat1';
  } else if (distance2 < distance1) {
   resultado = 'cat2';
  } else if (distance1 === distance2) {
   resultado = 'os gatos trombam e o rato foge';
  }
 return resultado;
}

// Desafio 8
function fizzBuzz(arrayNumberInput) {
  arrayNumberInput = [2, 15, 7, 9, 45];
  let resultado = [];
  for (let index = 0; index < arrayNumberInput.length; index += 1) {
    if (arrayNumberInput[index] % 3 === 0 && arrayNumberInput[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayNumberInput[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (arrayNumberInput[index] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!')
    }
  }
  console.log(resultado);
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
