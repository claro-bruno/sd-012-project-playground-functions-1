// Desafio 1
function compareTrue(booleano1, booleano2) {
  if (booleano1 && booleano2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayPalavras = [];
  let palavra = "";
  for (let char of sentence) {
    if (char === " ") {
      arrayPalavras.push(palavra);
      palavra = "";
    } else {
      palavra += char;
    }
  }
  arrayPalavras.push(palavra);
  return arrayPalavras;
}

// Desafio 4
function concatName(arrayPalavras) {
  let nome = arrayPalavras[arrayPalavras.length - 1] + ", " + arrayPalavras[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let numerosOrdenados = numeros.sort();
  let maior = numerosOrdenados[numerosOrdenados.length - 1];
  let contador = 0;
  for (let num of numeros) {
    if (num === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(cat1 - mouse);
  let distMouseCat2 = Math.abs(cat2 - mouse);
  if (distMouseCat1 < distMouseCat2) {
    return "cat1";
  } else if (distMouseCat2 < distMouseCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let retorno = [];
  for (let num of numeros) {
    if (num % 3 === 0 && num % 5 === 0) {
      retorno.push("fizzBuzz");
    } else if (num % 3 === 0) {
      retorno.push("fizz");
    } else if (num % 5 === 0) {
      retorno.push("buzz");
    } else {
      retorno.push("bug!");
    }
  }
  return retorno;
}

// Desafio 9
let decodificador = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(frase) {
  let novaFrase = "";
  for (let letra of frase) {
    for (let key in decodificador) {
      if (letra === key) {
        letra = decodificador[key];
      }
    }
    novaFrase += letra;
  }
  return novaFrase;
}

function decode(frase) {
  let novaFrase = "";
  for (let letra of frase) {
    for (let key in decodificador) {
      if (letra == decodificador[key]) {
        letra = key;
      }
    }
    novaFrase += letra;
  }
  return novaFrase;
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
