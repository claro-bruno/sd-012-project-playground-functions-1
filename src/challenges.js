// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  }
  if(valor1 === false && valor2 === false){
    return false;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) /2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let resultado;
  resultado = string.split(" ");
  return resultado;
}

// Desafio 4
function concatName(arrayS) {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = 0;
  resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = 0;
  let repet = 0;

  for(let aux = 0; aux < arrayNum.lenght; aux+= 1){
    if(arrayNum[aux] > maiorNum){
      maiorNum = arrayNum[aux];
    }
  }
  for(let aux = 0; aux < arrayS.lenght; aux+= 1){
      if(arrayNum[aux] === maiorNum){
        repet+= 1;
      }
  }
  return repet;
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
