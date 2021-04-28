// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui!
  let resultado = false;
  if (valor1 === true && valor1 === valor2){
     resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = ((base * height) / 2);
  return triangleArea;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let newSentence = frase.split(' ');
  return newSentence;
}

// Desafio 4
function concatName(array) {
  // seu código aqui  
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = ((wins * 3) + (ties * 1));
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highestValue = numbers[0];
  let soma = 0;

  for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > highestValue) {
      highestValue = numbers[index];
      };
    };

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] === highestValue){
      soma += 1;
    }; 
  };
  return soma;
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
