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
// let lista = [9, 1, 2, 3, 9, 5, 7];
// let lista = [0, 4, 4, 4, 9, 2, 1];
let lista = [0, 0, 0];
function highestCount(valores) {
  let maiorNumero =0;
  let contador =1;
  maiorNumero = valores[0];
  for (let index =1 ; index<valores.length ; index +=1){    
    if (maiorNumero!=valores[index] && maiorNumero<valores[index]){
      contador =0;
    }
    if(maiorNumero<=valores[index]){
      maiorNumero = valores[index];
      contador +=1;
    }    
  }return contador;
}
console.log(highestCount(lista));


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanciaRatoCat1 = cat1 - mouse;
  let distanciaRatoCat2 = cat2 - mouse;

  // let posicaoRato, posicaoGato1, posicaoGato2;
  if(distanciaRatoCat1 <distanciaRatoCat2){
    return console.log("cat1");
  }else if (distanciaRatoCat1 > distanciaRatoCat2){
    return console.log("cat2");
  }else{
    return console.log("os gatos trombam e o rato foge");
  }
}

catAndMouse(0,3,2);
catAndMouse(0,6,12);
catAndMouse(0,2,2);

// Desafio 8
function fizzBuzz(lista) {
  
  let novaLista =[];
  for (let index =0 ; index<lista.length ; index +=1){
    
    if(lista[index]%3==0 && lista[index]%5){
      return novaLista.push('fizzBuzz');
    }
    else if(lista[index]%3==0){
      return novaLista.push('fizz');
    }/
    else if(lista[index]%5==0){
      return novaLista.push('buzz');
    }
    else if(lista[index]%5!=0 && lista[index]%3!=0) {
      return novaLista.push('buzz');
    }
  }return novaLista;
}

let numbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(numbers));


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
