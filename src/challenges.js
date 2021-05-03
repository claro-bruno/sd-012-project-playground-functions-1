// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  return val1 && val2;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  return texto.split(' ');
}

// Desafio 4
function concatName(texto) {
  // seu código aqui
  return texto[texto.length - 1] + ', ' + texto[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = ((wins * 3) + ties);
  return resultado;
}

// Desafio 6
function highestCount(matriz) {
  // seu código aqui
  let matrizOrganizada = matriz.sort();
  let contar = 0;

  for (let resultado = 0; matrizOrganizada.length - 1; resultado += 1) {
    if (matriz[resultado] === matrizOrganizada[matrizOrganizada.length - 1]) {
      contar += 1;
    }
  }
  return contar;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 < cat2) {
    return "cat1";
  } else if (cat2 < cat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
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
