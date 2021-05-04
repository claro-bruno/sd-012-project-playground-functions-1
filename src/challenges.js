// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
   };
  console.log(compareTrue(true, false));


// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
};
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
};
console.log(splitSentence('vamo que vamo'));


// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length-1];
  return  ultimo + ', ' + primeiro;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(0, 0));


// Desafio 6
let array1 = [0, 0, 0]

function highestCount(array) {
  let bigger = array[0];
  let repeat = 0;
  
      for (let index = 0; index < array.length; index +=1){
          if(bigger < array[index]){
              bigger = array[index];
          };       
      };

      for (let index = 0; index <array.length; index +=1){
        if(bigger === array[index]){
          repeat +=1;
        }
      }
  return repeat;
  }
  console.log(highestCount(array1));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positions = {
    distanceCat1: Math.abs (cat1 - mouse),
    distanceCat2: Math.abs (cat2 - mouse),
  }
  
  if (positions.distanceCat2 > positions.distanceCat1) {
    return 'cat1';
    }
    else if (positions.distanceCat1 > positions.distanceCat2){
    return 'cat2';
    }
    else { 
    return 'os gatos trombam e o rato foge'
    }
}
console.log(catAndMouse(10,8,13));

// Desafio 8

function fizzBuzz(array) {
  arrayFizzBuzz = [];
  for(let index = 0; index < array.length; index +=1){
    if(array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    }
    else if (array[index] % 3 === 0){
      arrayFizzBuzz.push('fizz');
    }
    else if (array[index] % 5 === 0){
      arrayFizzBuzz.push('buzz');
    }
    else {
      arrayFizzBuzz.push('bug!');
    };
  };
  return arrayFizzBuzz;
};
console.log(fizzBuzz([9,25]));

// Desafio 9

//creditos: Gisele Costa - Turma 11  eu pesquisei sobre replace porem ainda nao estava entendo como montar bem a sintaxe.
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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



