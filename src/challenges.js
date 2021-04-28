// Desafio 1
function compareTrue(bolleano1,bolleano2) {
  if(bulleano1===true && bulleano2===true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height/2)
  
}

// Desafio 3
function splitSentence(frase) {
let marcador=0;
let palavras=[];
let ffinal=[];

  for(let index=0; index<frase.length; index+=1){
    if(frase[index]===' '){
        for(marcador; marcador<index; marcador+=1){
          palavras+=frase[marcador];
        };
        ffinal.push(palavras);
        palavras=[];
        marcador=index+1;
    };

  };


  for(marcador;marcador<frase.length;marcador+=1){
    palavras+=frase[marcador];
  };
     ffinal.push(palavras);
  return ffinal;
};

// Desafio 4
function concatName(array) {
  ultimo=array.length;
  return array[ultimo-1] +','+ array[0]+'.'
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties;
  
}

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
