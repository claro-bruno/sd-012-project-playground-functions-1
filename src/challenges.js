// Desafio 1
function compareTrue(booleano1, booleano2) {
  // seu código aqui
  if (booleano1 === true && booleano2 === true)
    return console.log('true');
  else return console.log('false');
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return console.log(area);
};

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array1 = [string];
  let array2 = [];
  for (let indice = 0; indice < array1.lenght; indice += 1) {
    if (array1[indice] != ' ') {
      array2 = [array1[indice].push];
    };
  };
  return console.log(array2);
};

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
