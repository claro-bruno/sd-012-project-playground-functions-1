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
  let maiornum = num1;
  let num1 = array[0];
  let num2 = null;
  for (let indice1 = 0; indice1 < array.length; indice1 += 1) {
    numero2 = array[indice1];
    if (maiornum >= num2)
      empty;
    else
      maiornum = num2;
  };
  let cont = null;
  for (let indice2 = 0; indice2 < array.length; indice2 += 1) {
    if (maiornum == array[indice2])
      cont = cont + 1;
  };
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia1 < 0) {
    distancia1 = -distancia1;
  };
  if (distancia2 < 0) {
    distancia2 = -distancia2;
  };
  let distancia = distancia2 - distancia1;
  let pegarato = '';

  if (distancia > 0) {
    pegarato = 'cat1';
    return pegarato;
  };

  if (distancia < 0) {
    pegarato = 'cat2';
    return pegarato;
  };

  if (distancia == 0) {
    pegarato = 'os gatos trombam e o rato foge';
    return pegarato;
  };

}

// Desafio 8
function fizzBuzz(arraynum) {
  // seu código aqui
  let arraystring = [];

  for (let indice = 0; indice < arraynum.length; indice += 1) {

    if (arraynum[indice] % 3 == 0 && arraynum[indice] % 5 == 0) {
      arraystring.push('fizzbuzz');
    } 
    else {
      if (arraynum[indice] % 3 == 0) {
        arraystring.push('fizz');
      }

      if (arraynum[indice] % 5 == 0) {
        arraystring.push('buzz');
      }
    };

    if (arraynum[indice] % 3 !== 0 && arraynum[indice] % 5 !== 0) {
      arraystring.push('bug!');
    };
  };

return console.log(arraystring);
};
fizzBuzz([3,5,7]);

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
