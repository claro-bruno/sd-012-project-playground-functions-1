// Desafio 1
function compareTrue(valor1, valor2) {
//   // seu código aqui
  let resultado;
 if (valor1 === true && valor2 === true){
    resultado = true;
 } else {
    resultado = false;
 }
  return (resultado);
};
console.log(compareTrue(3,3));


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) /2;
  return (area);
  }

  console.log(calcArea(51,1))


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let divisao = string.split(" ");
  return (divisao);
};


// Desafio 4
let stringConcat = [];
function concatName(string) {
  
  let firstArray = array[0];
  let lastArray = array[(array.length) - 1];
  let resultado = [lastArray, firstArray];
  return (resultado);

};
console.log(concatName(concatenacaoDaString));

// Desafio 5
function footballPoints() {
  // seu código aqui
  let resultado = (wins*3) + (ties*1);
  return (resultado);
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
