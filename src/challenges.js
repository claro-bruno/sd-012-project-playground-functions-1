// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui Xablau
  let trueOrFalse;
  if (bool1 === true && bool2 === true){
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
  
};
//console.log(compareTrue(true, false));


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc;
  calc = (base * height) /2;

  return calc;
};

//console.log(calcArea (51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separador;
  separador = frase.split (" ");

  return separador;
};
//console.log (splitSentence("foguete"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let concat;
  for(let index = 0; index < array.length; index += 1){
    concat = (array[array.length-1]) + ',' + array[0];
  }
  
  return concat;
}

//console.log(concatName (['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let calculo = (wins * 3) + (ties * 1);

  return calculo;
}
console.log(footballPoints(0, 0))

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
