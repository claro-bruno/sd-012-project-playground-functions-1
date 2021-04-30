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
