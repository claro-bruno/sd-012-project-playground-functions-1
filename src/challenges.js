// Desafio 1
let a = true;
let b = false;
let answer = a && b;
function compareTrue(a,b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
 }
  console.log(answer);


 // Desafio 2
let base = 10;
let height = 50;
function calcArea (base, height) {
  return (base * height) / 2;
} 
console.log((base * height) / 2);
 
 
 // Desafio 3
  
function splitSentence(string){
  return string.split(" ");
}
console.log(splitSentence("vamo que vamo"));
  
  

// Desafio 4
let strings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(strings){ 
  return strings[strings.length -1] + ' ' + strings[0];
  
} 
console.log(strings[strings.length -1] + ', ' + strings[0]);
  

// Desafio 5
let wins = 1;
let ties = 2;
function footballPoints(wins,ties) {
  return ((wins * 3) + (ties *1))
}
console.log((wins * 3) + (ties *1))

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
