// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 == true && valor2 == true) {
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let result = ((base * heigth) / 2);
  return result;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  // fonte: shorturl.at/hrIPZ 
  return sentence.split(" ");
};

// Desafio 4
function concatName(names) {
  // seu código aqui
  let posicao1 = names[0];
  let posicao2 = names[names.length -1]
  return posicao2 + ", " + posicao1;
};

console.log(concatName("Lucas", "Cassiano", "Ferraz", "Paolillo"))

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
