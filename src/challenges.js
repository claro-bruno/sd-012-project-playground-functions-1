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
 } console.log((base * height) / 2);
 
 
 // Desafio 3
  
  function splitSentence(string){
   return string.split(" ");
  }
  console.log(splitSentence("vamo que vamo"));
  
  

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
