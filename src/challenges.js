// Desafio 1
function compareTrue(valorBoolean1, valorBoolean2) {
  // seu código aqui
  if ((valorBoolean1 === true) && (valorBoolean2 === true)) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let result;

  result = (base * heigth) / 2;

  return result;
}
// console . log (calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  string = string.split(' '); // Lembrar de dar 2 espaços se não ele separa letra por letra.

  return string;
}

let frase = 'go trybe';
console.log(splitSentence(frase));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let nomes = ['lucas', 'cassiano','ferraz','paolillo'];
  let primeiroNome;
  let ultimoNome;

  for(let index =0; index < nomes.length; index += 1){
    
    primeiroNome = index[0];
    ultimoNome = index[nomes.length];
  }
  console.log(nomes);
}
  let last = array.slice(-1)[0];
  let first = array[0];
  let together = [];
  together.push(last + first);
  return together;
}
names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(names));

let arrSplit = [];
for (let index = 0; index < arr.length; index += 1) {
  console.log(index);
  if (index === 0 || index === arr.length - 1) {
    arrSplit.unshift(arr[index]);
  }
}
return arrSplit;
}
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
