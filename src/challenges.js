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
function fizzBuzz(numArray) {
  // seu código aqui
  // Nesse código eu tive ajuda do André Lorenzoni
  let resultadu = [];
  for (let index = 0; index < numArray.length; index += 1) {
    if ((numArray[index] % 3 === 0) && (numArray[index] % 5 === 0)) {
      resultadu[index] = "fizzBuzz"
    } else if (numArray[index] % 5 === 0) {
      resultadu[index] = "buzz"
    } else if (numArray[index] % 3 === 0) {
      resultadu[index] = "fizz"
    } else {
      resultadu[index] = "bug!"
    }
  }
  return resultadu;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  // fonte: shorturl.at/bnwG1
  // Nesse código eu tive ajuda do André Lorenzoni
  frase = frase.replace(/a/g, '1');
  frase = frase.replace(/e/g, '2');
  frase = frase.replace(/i/g, '3');
  frase = frase.replace(/o/g, '4');
  frase = frase.replace(/u/g, '5');
  return frase;
}
function decode(frase) {
  // seu código aqui
  // fonte: shorturl.at/bnwG1
  frase = frase.replace(/1/g, 'a');
  frase = frase.replace(/2/g, 'e');
  frase = frase.replace(/3/g, 'i');
  frase = frase.replace(/4/g, 'o');
  frase = frase.replace(/5/g, 'u');
  return frase;
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
