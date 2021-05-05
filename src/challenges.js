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
function highestCount(arrayNumero){
  let contador = 0;
  let maior;
  let teste;
  for (let index = 0; index < arrayNumero.length; index += 1 ){
    maior = Math.max(... arrayNumero);

    teste = maior;   
    if(teste === arrayNumero[index]){
      contador = contador + 1;
    }
  }

  return contador;
}

console.log(highestCount([0, 0, 0]));

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

console.log(catAndMouse(0, 8, 8));

// Desafio 8
function fizzBuzz(verificaArray) {
  let xablau = [];
  for(index = 0; index < verificaArray.length; index += 1){
    if(verificaArray[index] % 3 === 0 && verificaArray[index] % 5 !== 0){
      xablau.push('fizz');

    }else if(verificaArray[index] % 5 === 0 && verificaArray[index] % 3 !== 0){
      xablau.push('buzz');

    }else if(verificaArray[index] % 3 === 0 && verificaArray[index] % 5 === 0){
      xablau.push('fizzBuzz');

    }else if(verificaArray[index] % 3 !== 0 && verificaArray[index] % 5 !== 0){
      xablau.push('bug!');

    }
  }
  
  return xablau;
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(encodificando) { 
  let arraySepara = [];
  let arrayJunta = [];
  arraySepara = encodificando.split('');
  for(index = 0; index < arraySepara.length; index += 1){
    if(arraySepara[index] === 'a'){
      arraySepara.splice(index, 1, '1');

    }else if(arraySepara[index] === 'e'){
      arraySepara.splice(index, 1, '2');

    }else if(arraySepara[index] === 'i'){
      arraySepara.splice(index, 1, '3');
      
    }else if(arraySepara[index] === 'o'){
      arraySepara.splice(index, 1, '4');
      
    }else if(arraySepara[index] === 'u'){
      arraySepara.splice(index, 1, '5'); 
    }
  }
  arrayJunta = arraySepara.join('');
  return arrayJunta;
}

console.log(encode('hi there!'));

function decode(decodificando) {
  let separa = [];
  let junta = [];
  separa = decodificando.split('');
  for(index = 0; index < separa.length; index += 1){
    if(separa[index] === '1'){
      separa.splice(index, 1, 'a'); // separa[index] = '1' 

    }else if(separa[index] === '2'){
      separa.splice(index, 1, 'e');

    }else if(separa[index] === '3'){
      separa.splice(index, 1, 'i');
      
    }else if(separa[index] === '4'){
      separa.splice(index, 1, 'o');
      
    }else if(separa[index] === '5'){
      separa.splice(index, 1, 'u'); 
    }
  }
  junta = separa.join('');
  return junta;
}

console.log(decode('h3 th2r2!'));


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
