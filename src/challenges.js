// Desafio 1 - Verificação de números pares
function compareTrue(valor1, valor2) {
  if (valor1 % 2 == 0 && valor2 % 2 == 0) {
    return('true');
  }
  else {
    return('false');
  }
}
//console.log(compareTrue(89,56));
//console.log(compareTrue(73,11));
//console.log(compareTrue(98,42));



// Desafio 2 - Cálculo da área do triângulo
function calcArea(base, height) {
 return ((base * height) / 2);
}
//console.log(calcArea(10,50));
//console.log(calcArea(5,2));
//console.log(calcArea(51,1));



// Desafio 3
let array = [ ];
let posicaoInicial = 0;
let posicaoFinal = 1;
let palavra;

function splitSentence(frase) {
for(index = 0; index < frase.length; index += 1){
  if(frase[index] = ' ') {
    palavra.push [index = posicaoInicial;] = posicaoInicial[index]
    array.push(frase);
    
  }
  else {
    posicaoFinal = posicaoFinal + 1;
  }
}
return array
}
console.log(splitSentence('go Trybe'))


// Desafio 4  
let nome = [ ];

function concatName (nome) {
  return nome[nome.length - 1] + ', ' + nome[0];  
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//console.log(concatName(['foguete', 'não', 'tem', 'ré']));
//console.log(concatName(['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties; 
}
//console.log(footballPoints(14,8));
//console.log(footballPoints(1,2));
//console.log(footballPoints(0,0));

// Desafio 6
let repeticao = [ ];
let resultado = 0;

function highestCount(repeticao) {
  let a = repeticao.sort();
  let b = a[a.length - 1]
for(index = 0; index < a.length; index += 1)
    if (a[index] === b){
    resultado = resultado + 1;
    } else { 
    }
  return resultado;
}

//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
//console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
//console.log(highestCount([0, 0, 0]));

// Desafio 7
let resultado;
let posicaoCat1;
let posicaoCat2;

function catAndMouse(mouse, cat1, cat2) {
  posicaoCat1 = (mouse - cat1) * (mouse - cat1);
  posicaoCat2 = (mouse - cat2) * (mouse - cat2);
  if(posicaoCat1 < posicaoCat2){
    resultado = 'cat1';
    }
  else if(posicaoCat2 < posicaoCat1) {
    resultado = 'cat2';
    }
  else {
    resultado = 'os gatos trombam e o rato foge'
    }
return resultado;
}
//console.log(catAndMouse(5,1,2));
//console.log(catAndMouse(5,6,2));
//console.log(catAndMouse(3,1,5));

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
