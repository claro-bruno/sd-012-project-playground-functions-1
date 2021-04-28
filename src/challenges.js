// Desafio 1
function compareTrue(booleano1, booleano2) {
  // seu código aqui
  let resultado = null;
  if (booleano1 === true && booleano2 === true)
    {resultado = true}
  else {resultado = false};
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
  let array1 = [string];
  let array2 = [];
  let palavras = null;
  for (let indice1 = 0; indice1 < array1.lenght; indice1 += 1) {
    if (array1[indice1] != ' ') 
       palavras= palavras + array1[indice1];
    else{
          array2.push(palavras);   
          palavras = null;
        };
  };
  array2.push(palavras);
  return console.log(array2);
};
 splitSentence('Go Trybe');


// Desafio 4
function concatName() {
  // seu código aqui
  
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
