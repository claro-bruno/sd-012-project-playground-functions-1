// Desafio 1
function compareTrue(valor1, valor2) {
  let resposta;
  if (valor1 === true && valor2 === true) {
    resposta = true;
    return resposta;
  } else if (valor1 === false || valor2 === false) {
    resposta = false;
    return resposta;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  let resposta = 0;
  let area = (base * altura) / 2;
  return area;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(" "); // separa a string de acordo com o caracter entre "aspas"
  return array;
}
console.log(splitSentence("Vamo que Vamo"));

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  let primeiroUltimo = ultimoNome + ", " + primeiroNome;
  return primeiroUltimo;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let totalPoints = wins + ties;
  return totalPoints;
}
console.log(footballPoints(7, 3));

// Desafio 6
function highestCount(maiorInteiro) {
  let tamanho = maiorInteiro.length;
  let maior = -999;
  let conta = 0;
  for (let index = 0; index <= tamanho; index += 1) {
    if (maior < maiorInteiro[index]) {
      maior = maiorInteiro[index];
    };
  };
  for (let index in maiorInteiro) {
    if (maior === maiorInteiro[index]) {
      conta = conta += 1;
    };
  };
  return conta;
}
console.log(highestCount([5, 2, 8, 4, 2, 5, 8, 5, 8]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  console.log(cat1, cat2);

  if (cat1 < cat2) {
    return "cat1";
  } else if (cat2 < cat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(7, 5, 8));

// Desafio 8
function fizzBuzz(listaInteiros) {
  let arrayFizzBuzz = [];
  let total = listaInteiros.length;
  for (let index = 0; index < total; index += 1) {
    if (((listaInteiros[index] % 3) === 0) && ((listaInteiros[index] % 5) === 0)) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if ((listaInteiros[index] % 3) === 0) {
      arrayFizzBuzz.push("fizz");
    } else if ((listaInteiros[index] % 5) === 0) {
      arrayFizzBuzz.push("buzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  };
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let separado = string.split("");
  //console.log(separado);
  let tamanho = string.length;
  for (let index = 0; index < tamanho; index += 1) {
    if (string[index] === "a") {
      separado[index] = "1";
    } else if (string[index] === "e") {
      separado[index] = "2";
    } else if (string[index] === "i") {
      separado[index] = "3";
    } else if (string[index] === "o") {
      separado[index] = "4";
    } else if (string[index] === "u") {
      separado[index] = "5";
    };
  };
  separado = separado.join("");
  //console.log(separado);
  return separado;
}

function decode(string) {
  let separado = string.split("");
  let tamanho = string.length;
  for (let index = 0; index < tamanho; index += 1) {
    if (string[index] === "1") {
      separado[index] = "a";
    } else if (string[index] === "2") {
      separado[index] = "e";
    } else if (string[index] === "3") {
      separado[index] = "i";
    } else if (string[index] === "4") {
      separado[index] = "o";
    } else if (string[index] === "5") {
      separado[index] = "u";
    };
  };
  separado = separado.join("");
  return separado;
} 

console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));

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
