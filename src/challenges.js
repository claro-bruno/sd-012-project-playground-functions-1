// Desafio 1
function compareTrue(number1,number2) {
  // seu código aqui
 let number1 = 5;
 let number2 = 3;
 let isTrue = (number1 >= 3 && number2 >= 3  );
//  let isFalse = (number1 <= 2 && number2 <= 2 );

 if (number1 >= 3 && number2 >= 3){
   return isTrue;
 } else {
   return isTrue = False;
 }
};
// console.log(compareTrue(2,2));

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = 0;
  if(base > 0 && altura > 0) {
    area = (base * altura) /2;
  }
  return area;
};
// console.log(calcArea(2,4))

// Desafio 3
function splitSentence(" ") {
  // seu código aqui
  let divisao = string.split(" ");
  return divisao;
};
// console.log(splitSentence(" "));

// Desafio 4
function concatName(string) {
  // seu código aqui
  let concatenacaoDaString = [];

  for (let index = 0; index < string.length; index++) {
    concatenacaoDaString = string[index] + "," +
  };
  return concatenacaoDaString;

};

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
