// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true)
  return true
  else
  return false
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui

let area = (base * altura)/2;
return area;

}


// Desafio 3
function splitSentence(primeiroValor) {
  // seu código aqui
return primeiroValor.split(' ');

}

// Desafio 4
function concatName(sentenca) {
  // seu código aqui
  
  let resultado = sentenca[sentenca.length-1]+ ", " + sentenca[0];

  return resultado;
}


// Desafio 5
function footballPoints(wins,ties,) {
  // seu código aqui
  let countWin = 0;
  let countTies = 0;
  for(let index = 0; index < wins; index+= 1){
    countWin+=3;
  }
  for(let index = 0; index < ties; index+= 1){
    countTies+=1;
  }
  return countWin + countTies;

}


// Desafio 6
function highestCount(vetor) {
  // seu código aqui

  let numMaior = Math.max(...vetor);
  let count = 0;
for(let index = 0; index < vetor.length;index+=1){
  if(numMaior == vetor[index]){
    count+=1;
  }
}
return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
if((cat1-mouse)<(cat2-mouse)){
  return 'cat1';
}else if((cat2-mouse)<(cat1-mouse)){
  return 'cat2';
}else
return 'os gatos tromam e o rato foge';

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
