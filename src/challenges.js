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
function concatName(arrayString) {
  let ultimo = arrayString[arrayString.length - 1];
  let primeiro = arrayString[0];
  let resultado = ultimo + ', ' + primeiro;

  return resultado;
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

  for(let aux = 0; aux < arrayNum.length; aux+= 1){
    if(arrayNum[aux] > maiorNum){
      maiorNum = arrayNum[aux];
    }
  }
  for(let aux2 = 0; aux2 < arrayNum.length; aux2+= 1){
      if(arrayNum[aux2] === maiorNum){
        repet+= 1;
      }
  }
  return repet;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;

  if(dist1 < 0){
    dist1 = dist1 * -1;
  }
  if(dist2 < 0){
    dist2 = dist2 * -1;
  }

  if(dist1 > dist2){
    return "cat2";
  }
  if(dist2 > dist1){
    return "cat1";
  }
  if(dist1 === dist2){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let resultado = [];
  for(let aux = 0; aux < arrayNum.length; aux += 1){
    if(arrayNum[aux] % 3 === 0 && arrayNum[aux] % 5 === 0){
      resultado.push('fizzBuzz');
    }
    else if(arrayNum[aux] % 3 ===0){
      resultado.push('fizz');
    }
    else if(arrayNum[aux] % 5 === 0){
      resultado.push('buzz');
    }
    else{
      resultado.push('bug!');
    }
  }
  return resultado;
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
