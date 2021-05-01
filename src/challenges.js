// Desafio 1
function compareTrue(boolean1, boolean2) {
  
  if (boolean1 === true && boolean2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {

let area = (base * height)/2;

return area;

}

// Desafio 3
function splitSentence(string){
  string = string.split(' ')

  return string;
}

// Desafio 4
function concatName(arrayString) {

  let ultimoArray = arrayString[arrayString.length - 1];
  let primeiroArray = arrayString[0];
  let resultadoArray = `${ultimoArray}, ${primeiroArray}`;
  
  return resultadoArray;
}

// Desafio 5

function footballPoints(wins, ties) {

let pontos = wins * 3 + ties;    

  return pontos;
}

// Desafio 6
function highestCount(array){ 
let maiorValor = 0;
let repeticao = 0; 

for(let contador = 0; contador < array.length; contador+=1){
  if(array[contador] > maiorValor) {
    maiorValor = array[contador];
  }
}

for(let value of array){
  if(maiorValor === value){
    repeticao += 1;
  } 
}
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
 let cat1distancia =  Math.abs(cat1 - mouse);
 let cat2distancia =  Math.abs(cat2 - mouse);
 
 if(cat1distancia > cat2distancia){
   return 'cat2';
 } else if (cat2distancia > cat1distancia){
   return 'cat1';
 }
   return 'os gatos trobam e o rato foge';
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