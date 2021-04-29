// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  // seu código aqui
  let primeiroValor = arrayDeStrings[0];
  let ultimoValor = arrayDeStrings[arrayDeStrings.length - 1];

  return `${ultimoValor}, ${primeiroValor}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function maiorNumero(numInArray) {
  let Numero = 0;
  for (let i in numInArray) {
    if (numInArray[i] > Numero) {
      Numero = numInArray[i];
    }
  }
  return Numero;
}

function highestCount(array) {
  // seu código aqui
  let getMaiorNumero = maiorNumero(array);
  let maiorRepetido = 0;
  let repetiu = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (maiorRepetido !== getMaiorNumero) {
      repetiu = 0;
    }
    if (getMaiorNumero === array[i]) {
      maiorRepetido = array[i];
      repetiu += 1;
    }
  }
  return repetiu;
}

// Desafio 7
function calcularDistancia(mouse, cat) {
  let distancia = cat - mouse;
  if (distancia < 0) {
    distancia = mouse - cat;
  }
  return distancia;
}

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaRatoGato1 = calcularDistancia(mouse, cat1);
  let distanciaRatoGato2 = calcularDistancia(mouse, cat2);

  let string = 'gatos';
  if (distanciaRatoGato1 < distanciaRatoGato2) {
    string = 'cat1';
  } else if (distanciaRatoGato2 < distanciaRatoGato1) {
    string = 'cat2';
  } else if (distanciaRatoGato1 === distanciaRatoGato2) {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFinal = [];
  for (let i = 0; i < array.length; i += 1) {
    arrayFinal[i] = '';
    if ((array[i] % 3) === 0) {
      arrayFinal[i] += 'fizz';
    } 
    if ((array[i] % 5) === 0) {
      arrayFinal[i] += 'buzz';
    } 
    if ((array[i] % 5) && (array[i] % 3) !== 0) {
      arrayFinal[i] += 'bug!';
    }
  }

  return arrayFinal;
}
console.log(9 % 5)
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
