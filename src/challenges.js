// Desafio 1
function compareTrue() {
  let a = 1
return a == 1 && b == 2
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) { 
  let result;
  result = frase.split(' ');
   return result;
}

// Desafio 4
function concatName(listaNomes) {

let inicio = listaNomes[0];
let fim = listaNomes[listaNomes.length - 1];    
return (fim + ', ' + inicio);
    }

// Desafio 5
function footballPoints(wins, ties) {
    let results;
    results = (wins * 3) + (ties);
    return results;
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
function fizzBuzz(num) {

for (let index = 0; index <= num.length; index+= 1) {

if  (index % 3 === 0) {
  num[index] = 'fizz';

  } else if (num[index] % 5 === 0) {
    num[index] = "buzz";
    
} else if (num[index] % 3 === 0 && num[index] % 5 === 0) {
    num[index] = 'fizzBuzz';
    
    } else (num[index] % 3 !== 0 && num[index] % 5 !== 0); {
      
   num[index] = 'bug';
   }   
}
return num;
}

// Desafio 9
function encode(string) {
return string.replace(/a/g, 1)
             .replace(/e/g, 2)
             .replace(/i/g, 3)
             .replace(/o/g, 4)
             .replace(/u/g, 5);
}

function decode(string) {
return string.replace(/1/g, 'a')
             .replace(/2/g, 'e')
             .replace(/3/g, 'i')
             .replace(/4/g, 'o')
             .replace(/5/g, 'u');
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