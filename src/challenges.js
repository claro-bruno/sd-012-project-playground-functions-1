// //Desafio 1
   function compareTrue(bool1,bool2) {
   return bool1 && bool2 ;
   } 
//  //Desafio 2
  function calcArea(base,height) {
  let area = (base * height) / 2;
  return area;
 }
// Desafio 3
  function splitSentence(newfrase) {
     return newfrase.split(' ');
    }
     return newfrase.split= ' ';
 
//  //Desafio 4
 function concatName(array) {
 let primeiroNome = array[array.length -1];         
 let ultimoNome =  array[0];
let nome = primeiroNome + ', ' + ultimoNome;

 return nome; 
}
// //Desafio 5
function footballPoints(wins,ties) {
let match = wins *3 + ties *1;
 return match;
}
 //Desafio 6
 function highestCount(array) {
   let highestNumber = 0;
   let counter = 0;
   for (let index = 0; index < array.length; index += 1) {
     if (array[index] >= highestNumber) {
       highestNumber = array[index];
       counter += 1;
     }
   }
   return counter;
  }
// //Desafio 7
  function catAndMouse() {
  
 }

// //Desafio 8
  function fizzBuzz() {
  
 }

// //Desafio 9
   function encode(frase) {
    let novaFrase = frase
      .replace(/a/g, '1')
      .replace(/e/g, '2')
      .replace(/i/g, '3')
      .replace(/o/g, '4')
      .replace(/u/g, '5');
    return novaFrase;
  }
 
     function decode(codigo) {
      let novoCodigo = codigo
        .replace(/1/g, 'a')
        .replace(/2/g, 'e')
        .replace(/3/g, 'i')
        .replace(/4/g, 'o')
        .replace(/5/g, 'u');
      return novoCodigo;
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
