// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui feito
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui feito
  let result = ((base * heigth) / 2);
  return result;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui feito
  // fonte: shorturl.at/hrIPZ 
  return sentence.split(" ");
};

// Desafio 4
function concatName(names) {
  // seu código aqui feito
  let posicao1 = names[0];
  let posicao2 = names[names.length -1]
  return posicao2 + ", " + posicao1;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui feito
  let vitoriasPontos = wins * 3
  let empatesPontos = ties
  return vitoriasPontos + empatesPontos
}

// Desafio 6
function highestCount(array) {
  // seu código aqui aparentemente funciona
  // fonte shorturl.at/jyUY9
  let numeros = array
  let maiorNumero = Math.max.apply(null, numeros)
  let count = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maiorNumero) {
      count += 1; 
    }
  }
  return count;
}

console.log(highestCount([2, 3, 5, 9, 9, 7, 9]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado
  let distCat1 = Math.abs(mouse - cat1)
  let distCat2 = Math.abs(mouse - cat2)
  if (distCat1 < distCat2) {
    resultado = "cat1";
  } else if (distCat2 < distCat1) {
    resultado = "cat2"
  } else {
    resultado = "os gatos trombam e o rato foge"
  }
  return resultado
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
