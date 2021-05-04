// Desafio 1
let resposta;
let valor1 = true;
let valor2 = true;

function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
   resposta = true; 
  } else{
   resposta = false;
  }
  return resposta;
}

console.log(compareTrue(valor1, valor2));

// Desafio 2
let base = 51;
let height = 1;
let area;


function calcArea(base, height) {
  area = (base*height)/2;

  return area
}

console.log(calcArea(base, height));

// Desafio 3
let frase = "foguete";
let array = [];

function splitSentence(frase, array) {
  array = frase.split(" ");

  return array;
}

console.log(splitSentence(frase, array));

// Desafio 4
let afray = ['captain', 'my', 'captain'];
let concatenado;

function concatName(afray, concatenado) {
    concatenado = afray[afray.length - 1] + ', ' + afray[0];

    return concatenado;
}

console.log(concatName(afray, concatenado));

// Desafio 5
let wins = 0;
let ties = 0;
let pontos = 0;

function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties *1;

  pontos = wins + ties;

  return pontos;
}

console.log(footballPoints(wins, ties));

// Desafio 6
let numeroAleatorio = [-20, -2, -13, -23, -2, -13, -19, -2];
let contador = 0;
let maior = 0;

function highestCount(numeroAleatorio, contador){
  for (let index = 0; index < numeroAleatorio.length; index += 1 ){
    maior = Math.max.apply(null, numeroAleatorio);

    if(maior === numeroAleatorio[index]){
      contador = contador + 1;
    }
  }

  return contador;
}

console.log(highestCount(numeroAleatorio, contador));

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;

  let resp;
  
  if(Math.abs(dist1) < Math.abs(dist2)){
    resp = 'cat1';

  }else if(Math.abs(dist1) > Math.abs(dist2)){
    resp = 'cat2';
  
  }else if(Math.abs(dist1) === Math.abs(dist2)){
    resp = 'os gatos trombam e o rato foge';
  }

  return resp;
}

console.log(catAndMouse(0,8,8));

// Desafio 8
function fizzBuzz() {
  
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
