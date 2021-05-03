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
    Numero = numInArray[i];
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaRatoGato1 = Math.abs(cat1 - mouse);
  let distanciaRatoGato2 = Math.abs(cat2 - mouse);

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
function fizz(valor) {
  let fiz = '';
  if ((valor % 3) === 0) {
    fiz = 'fizz';
  }
  return fiz;
}
function buzz(valor) {
  let buz = '';
  if ((valor % 5) === 0) {
    buz = 'buzz';
  }
  return buz;
}

function fizzBuzz(array) {
  // seu código aqui
  let arrayFinal = [];
  for (let i = 0; i < array.length; i += 1) {
    arrayFinal[i] = '';
    arrayFinal[i] += fizz(array[i]);
    arrayFinal[i] += buzz(array[i]);

    if ((array[i] % 5) && (array[i] % 3) !== 0) {
      arrayFinal[i] += 'bug!';
    }
  }
  return arrayFinal;
}

// Desafio 9
let encodeStrings = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

let decodeStrings = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(string) {
  // seu código aqui
  let str = '';
  for (let i = 0; i < string.length; i += 1) {
    if (encodeStrings[string[i]] != null) {
      str += encodeStrings[string[i]];
    } else {
      str += string[i];
    }
  }

  return str;
}

function decode(string) {
  // seu código aqui
  let str = '';
  for (let i = 0; i < string.length; i += 1) {
    if (decodeStrings[string[i]] != null) {
      str += decodeStrings[string[i]];
    } else {
      str += string[i];
    }
  }

  return str;
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
