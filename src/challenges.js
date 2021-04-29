// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = 0;
  if (valor1 === false && valor2 === false) {
    resultado = false;
    } if (valor2 === false || valor1 === false) {
    resultado = false;
    } else {
    resultado = true;
  }
  return resultado;
};

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  let aux = str.split(" ");
  return aux;
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(array) {
  let resultado = array[array.length -1] + ', ' + array[0];
  return resultado;
};

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete','não', 'tem', 'ré']));
console.log(concatName(['captian','my','captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins *3) + ties;
  return pontosTotais;
};

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(numeros) {
  let numeroMaior = 0;
  let contador = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeroMaior < numeros[index]) {
      numeroMaior = numeros[index];
    }
  }
  for (let index2 = 0; index2 <numeros.length; index2 +=1) {
    if (numeroMaior === numeros[index2]) {
      contador = contador + 1;
    }
  }
  return contador;
}

console.log(highestCount([0, 0, 0]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 0;
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat1 < positionCat2) {
    result = "cat1";
  } else if (positionCat2 < positionCat1) {
    result = "cat2";
  } else {
    result = "os gatos trombam e o rato foge";
  }
  return result;
}

console.log(catAndMouse(0, 3, 3))
console.log(catAndMouse(0, 6, 12))
console.log(catAndMouse(0, 3, 2))

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    let aux = 0;
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      aux = 'fizzBuzz';
    }
    
    if (aux != 'fizzBuzz') {
      if (array[index] % 5 === 0) {
        aux = 'buzz';
      } else if (array[index] % 3 === 0) {
        aux = 'fizz';
      } else {
        aux = 'bug!';
      }
    }

    result.push(aux);
  };
  return result;
};

console.log(fizzBuzz([9, 25]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
