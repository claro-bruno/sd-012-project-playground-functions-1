// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true;
  }
  else if(valor1 === false && valor2 === true){
    return false;
  }
  else if(valor1 === true && valor2 === false){
    return false;
  }
  else{
    return false;
  }
}

console.log

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) /2;
  return area;
}

console.log(calcArea(51,1));

// Desafio 3
function splitSentence(frase) {
  for (let index in frase){
    return frase.split(' ');
  }
}

console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(lista) {

  return lista[lista.length-1] +", "+  lista[0];
  // let ultimaPosicao = lista.length-1;
  // let primeiraPosicao = lista[0];

  // return lista [ultimaPosicao]  + ", " + lista[0];
}

let nomes = ['jose', 'maria', 'joão', 'Ricardo'];
console.log(concatName(nomes));


// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = 3;
  let empate = 1;
  
  return (wins * vitoria) + (ties * empate);
}

console.log(footballPoints(0,0));

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
