// Desafio 1
function compareTrue(param1, param2) {
if (param1 === param2 && param1 === true) {
      return true;

  }else {
    return false; 
}
};

// Desafio 2
function calcArea(base , height) {  
let resultado = (base*height)/2;
  return resultado; 
};

// Desafio 3
function splitSentence(frase) {
let array = [];
let palavra = '';
for (let index = 0; index < frase.length; index += 1){
  if (frase[index] === ' '){
    if (palavra != '') {
    array.push(palavra);
    }
    palavra = '';
  }
  else {
    palavra = palavra + frase[index];
  }
}
if(palavra != '') {
  array.push(palavra);
  }
return array;
}



// Desafio 4
function concatName(array) {
  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  return (ultimo + ', ' + primeiro);
}


// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  return (vitorias + empates)
}


// Desafio 6
function highestCount(array) {
let mais = 0;
for (let index = 0; index < array.length; index += 1){
  if (array[index] === Math.max(...array) && Math.max(...array) != 0){
    {mais += 1}
    }
    else if   
      (array[index] === Math.max(...array) && Math.max(...array) === 0){
      {mais += 1}
    }
  }
  return mais;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let cat1x = Math.abs(cat1 - mouse);
let cat2x = Math.abs(cat2 - mouse);

  if ((cat1 - cat2) === 0 && mouse === 0 || (cat1x === cat2x)) {
  return ('os gatos trombam e o rato foge');
}
else if (cat1x < cat2x) {
  return ('cat1');
}
else if (cat2x < cat1x) {
  return ('cat2');
}
}

// Desafio 8
function fizzBuzz(array) {
let div3 = array[index] % 3;
let div5 = array[index] % 5;
let storage = [];
for (let index = 0; index < array.length; index += 1);
    if (div3 != 0 && div5 != 0){
      return ('bug!').push(storage);
    }
    else if (div3 === 0 && div5 ===0){
      return ('fizzBuzz').push(storage);
    }
    else if (div3 === 0){
      return ('fizz').push(storage);
    }
    else if (div5 === 0){
      return ('buzz').push(storage);
    }
   return storage; 
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
