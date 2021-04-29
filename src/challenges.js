// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === boolean1) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
};

// Desafio 4
function concatName(nome) {
  return `${nome[nome.length - 1]}, ${nome[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins * 3) + (ties * 1);
  return pontosTotais;
}

// Desafio 6
function highestCount(highestCount) {
  let ordenados = highestCount.sort();
  let maior = ordenados[ordenados.length - 1];
  let contador = 0;
  for (key in ordenados) {
    if (ordenados[key] === maior) {
      contador = contador + 1;
    };
  };
  return contador;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)
  if (cat1 === cat2) {
    return "os gatos trombam e o rato foge";
  } else if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else {
    return "cat2";
  };
};

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
