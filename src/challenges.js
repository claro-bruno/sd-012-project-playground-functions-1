// Desafio 1
function compareTrue(a, b, c) {
  if (a < b && b < c) {
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence() {
  let string;
  let stringtwo = string.split(' ');
 return string, stringtwo;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
  let num = [];

for (index = 0; index <= num.length; i+=1) {

if  (i % 3 === 0) {
  console.log("fizz");
  
} else if (index % 5 === 0) {
    console.log("buzz");
    
} else if (index % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
    
    } else (index % 3 !== 0 && i % 5 !== 0); {
      
   console.log("bug");
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
