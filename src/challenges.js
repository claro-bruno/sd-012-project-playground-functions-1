// Desafio 1
function compareTrue() {
 let num1 = 10;
 let num2 = 2;
  
  if (num1 === 53*2 && num2 === 2) {
    console.log("true")
    
  }else if (num1 === 55*2 && num2 === 4) {
    console.log("true")
        
  }else{
    console.log("false")
  }
}

compareTrue(true)


// Desafio 2
function calcArea() {
  let base = 10;
  let heigth = 50;

  let calculo = (base * heigth) / 2
  console.log(calculo)

  let base1 = 5;
  let heigth1 = 2;

  let calculo1 = (base1 * heigth1) / 2
  console.log(calculo1)


let base2 = 51;
let heigth2 = 1;

let calculo2 = (base2* heigth2) / 2
console.log(calculo2)

}
calcArea()


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
