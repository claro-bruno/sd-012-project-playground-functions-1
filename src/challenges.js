// Desafio 1
function compareTrue(num1, num2) {

  if (num1 === 5*2 && num2 === 2) {
    console.log("true")
        
  }else{
    console.log("false")
  }
}

compareTrue(12, 2)
compareTrue(1, 22)
compareTrue(10, 2)


// Desafio 2


function calcArea(base, heigth) {
 
  let calculo = (base * heigth) / 2
  console.log(calculo)

}
calcArea(10, 50)
calcArea(5, 2)
calcArea(51, 1)


// Desafio 3
function splitSentence() {
  // seu código aqui
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
