// Desafio 1
function compareTrue(param1, param2) {

  if(param1 === true && param2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {

  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  fraseSplitada = string.split(' ');
  return fraseSplitada; 
}

// Desafio 4
function concatName(nomes) {
  let strConcatenada = "";

  strConcatenada = nomes[nomes.length-1] + ", " + nomes[0];

  return strConcatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let highestNum = 0;
  let repeticao = 0;

  for(let index = 0; index < numeros.length; index += 1) {
    if(highestNum < numeros[index]){
      highestNum = numeros[index];
    }
  }

  for(let index = 0; index < numeros.length; index += 1) {
    if(highestNum === numeros[index]) {
      repeticao += 1;
    }
  }
   return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1;
  let distanciaCat2;

  if(mouse < cat1) {
    distanciaCat1 = cat1 - mouse;
  }

  if(mouse > cat1) {
    distanciaCat1 = mouse - cat1;
  }
  
  if(mouse < cat2) {
    distanciaCat2 = cat2 - mouse;
  }

  if(mouse > cat2) {
    distanciaCat2 = mouse - cat2;
  }

  if(distanciaCat1 < distanciaCat2) {
    return "cat1";
  }

  if(distanciaCat2 < distanciaCat1) {
    return "cat2";
  }

  if(distanciaCat1 === distanciaCat2) {
    return "os gatos trombam e o rato foge"
  } 
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
