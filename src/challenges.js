// Desafio 1
function compareTrue(param1 , param2) {
  if(param1 === param2 && param1 === true) {
  return true;

}
else {
  return false; 
}
};

// Desafio 2
function calcArea(base , height) {  
let resultado = (base*height)/2;
  return resultado; 
};

// Desafio 3
function splitSentence(frase) {
let array = [];
let palavra = '';
for (let index = 0; index < frase.length; index += 1){
  if (frase[index] === ' '){
    if (palavra != '') {
    array.push(palavra);
    }
    palavra = '';
  }
  else {
    palavra = palavra + frase[index];
  }
}
if(palavra != '') {
  array.push(palavra);
  }
return array;
}



// Desafio 4
function concatName(array) {
  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  return (ultimo + ', ' + primeiro);
}


// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  return (vitorias + empates)
}


// Desafio 6
let mais;
function highestCount(array) {
  for (let index = 0; index < array.length; index += 1){
    if (array[index] = Math.max(array)){
      mais += 1;
      return mais;
    }
    else (Math.max(array) = 0){
      return mais;
    }
  }
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
