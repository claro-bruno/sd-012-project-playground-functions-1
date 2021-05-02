// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura) / 2;
  return area;
}
console.log(calcArea(2, 5));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let dividindoFrases = frase.split(' ');
  return dividindoFrases;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  let concatenacao = ultimo + ',' + ' ' + primeiro;
  return concatenacao;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let total = 3 * wins + ties;
  return total;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let contador = [0];
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > contador) {
      contador = array[index];
    }
  }
  for (let incremento = 0; incremento < array.length; incremento += 1) {
    if (array[incremento] == contador) {
      soma += 1;
    }
  }
  return soma;
}
console.log(highestCount([0, 7, 7, 3, 9, 5, 4]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valor1 = Math.abs(cat1 - mouse);
  let valor2 = Math.abs(cat2 - mouse);
  if (valor1 < valor2){
    return 'cat1';
  }
  else if (valor1 > valor2){
    return 'cat2';
  }
  else if (valor1 === valor2){
    return 'os gatos trombam e o rato foge'
  }
  // seu código aqui
}
console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(oi) {
  // seu código aqui
  let memory = [];
  for (let index = 0; index < oi.length; index += 1) {
    if (oi[index] % 3 == 0 && oi[index] % 5 !== 0) {
      memory.push('fizz');
    } else if (oi[index] % 5 == 0 && oi[index] % 3 !== 0) {
      memory.push('buzz');
    } else if (oi[index] % 3 == 0 && oi[index] % 5 == 0) {
      memory.push('fizzBuzz');
    } else {
      memory.push('bug!');
    }
  }
  return memory;
}

console.log(fizzBuzz([3, 5, 7, 9, 45]));

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
