//Desafio 1
// function compareTrue(bool1,bool2) {
 //return bool1 && bool2 ;
  } 
 //Desafio 2
  //function calcArea(base,height) {
  //let area = (base * height) / 2;
  //return area;
 //}
 //Desafio 3
  //function splitSentence(newfrase) {
 // let array = [];
  //let text = " ";
    //for ( let index=0; index< newfrase.length; index +=1); {
   //if (newfrase[index] == text);
  //    array.push(text + newfrase[index];)
  // } 
  // return array;
  //  }

 //Desafio 4
 // function concatName(array) {
 // let primeiroNome = array[array.length -1];         
 // let ultimoNome =  array[0];
//let nome = primeiroNome + ', ' + ultimoNome;
//
 // return nome; 
// }
//Desafio 5
function footballPoints(wins,ties) {
   let match = wins *3 + ties *1;
    return match;
  }
 //Desafio 6
//  function highestCount(array) {
  //  let highestNumber = 0;
  //  let counter = 0;
  //  for (let index = 0; index < array.length; index += 1) {
//      if (array[index] >= highestNumber) {
  //      highestNumber = array[index];
   //     counter += 1;
 //     }
 //   }
  //  return counter;
  //}
// Desafio 7
//function catAndMouse() {
  // seu código aqui
//}

// Desafio 8
//function fizzBuzz() {
  // seu código aqui
//}

// Desafio 9
//function encode() {
  // seu código aqui
//}
//function decode() {
  // seu código aqui
//}

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
