// Desafio 1
function compareTrue(a, b) {
  let compare;
  if (a === true && b === true) {
    compare = true;
  } else {
    compare = false
  }
  return compare;
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
function highestCount(numbers) {

let maxNumber = Math.max(...numbers);
let count = 0;

for (let index = 0; index < numbers.length; index+= 1) {
  
   if (maxNumber === numbers[index]) {
     count += 1;}
} 
     return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(num) {
  
  let list = [];
  for (index = 0; index < num.length; index+= 1) {
  
    if  (num[index] % 3 == 0) {
    list.push("fizz");
  
    } else if (num[index] % 5 == 0) {
      list.push("buzz");
      
    } else if (num[index] % 3 == 0 && num[index] % 5 == 0) {
        list.push("fizzBuzz");

    } else {
      list.push("bug!");
     }   
  }
  return list;
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