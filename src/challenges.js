// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if ((value1 === true) && (value2 === true)) {
    console.log(value1);
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  console.log(area)
  return area;
}
console.log(calcArea(7, 8));

// Desafio 3
function splitSentence(string) {
    // seu código aqui
  return string.split(" ");
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  // let elem1 = array[0];
  // let elem2 = array[array.length - 1];
return array[array.length -1] + ", " + array[0]; 
}
console.log(concatName(array));

  
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let placarWins = wins * 3;
let placarTies = ties * 1;
let pontos = placarTies + placarWins;

console.log(`${pontos}`)
return pontos;
} 

// Desafio 6
function highestCount(array) {
  // seu código aqui
let contagem = 0;
let maiorNum = Math.max(...array); //referencia retirada da documentação Math.max()

  
  for (let index = 0; index < array.length; index += 1) {
      if (array[index] == maiorNum)
        contagem += 1;
  }
    return contagem;
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
