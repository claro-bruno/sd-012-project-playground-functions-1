// Desafio 1
function compareTrue(a,b) {
  if ( a === true && b === false){
    return false
  } else if ( a === false && b === false){
    return false
  } else if ( a === true && b === true){
      return true }
}
console.log (compareTrue(true,false))
console.log (compareTrue(false,false))
console.log (compareTrue(true,true))


// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  let nomes = ["go" ,"trybe"];{
    console.log(nomes)
  }
// Desafio 4
function concatName(nomes) {
let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];{
 console.log(nomes [nomes.length-1],"," ,nomes[0])
}
let nomes = ['foguete', 'não', 'tem', 'ré'];{
  console.log(nomes [nomes.length-1],"," ,nomes[0])
 }
 let nomes = ['captain', 'my', 'captain'];{
  console.log(nomes [nomes.length-1],"," ,nomes[0])
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
