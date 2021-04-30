// Desafio 1
function compareTrue(valor1, valor2) {
  let eVerdadeiro = true;
  if (valor1 > 0 && valor2 > 0) {
    return eVerdadeiro;
  } else {
    return eVerdadeiro = false;
  }
};

// Desafio 2
function calcArea(base, altura) {
  let area = 0;
  if (base > 0 && altura > 0){
    area = (base * altura) / 2;
  };
  return area;
};

// Desafio 3
function splitSentence(string) {
  let divisao = string.split(" ");
  return divisao;
};

// Desafio 4
let concatenacaoString = [];
function concatName(string) {
  for (let index = 0; index < string.length; index += 1){
    concatenacaoString = string[index] + ", " + string[0];
  }
  return concatenacaoString;
}

// Desafio 5
let total = 0;
function footballPoints(wins, ties) {
  total = (wins * 3) + (ties);
  return total;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contagem = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] >= maiorNumero){
      maiorNumero = array[index];
    };
  };
  for (let index = 0; index < array.length; index += 1)
    if (array[index] === maiorNumero){
      contagem += 1;
  };
  return contagem;
};
// Desafio 7 rato 10, gato1 4, gato2 22
function catAndMouse(mouse, cat1, cat2) {
  let foge = "os gatos trombam e o rato foge"
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2); 
  let win;
if (gato1 < gato2){
  win = "cat1";
  return win;
} else if (gato2 < gato1){
  win = "cat2";
  return win;
} else {
  return foge;
}
}

// Desafio 8
function fizzBuzz(array) {
  for (let index in array){
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
    array[index] = "fizzBuzz";
    } else if (array[index] % 3 === 0){
      array[index] = "fizz";
    }else if (array[index] % 5 === 0){
      array[index] = "buzz";
    } else {
      array[index] = "bug!";
    }
  }
  return array;
  }

// Desafio 9
let codificado = [];
function encode(string) {
  string = string.split("");
  for (let index = 0; index <= string.length; index += 1){
    switch (string[index]){
      case "a":
        string[index] = "1";
      break;
      case "e":
        string[index] = "2";
      break;
      case "i":
        string[index] = "3";
      break;
      case "o":
        string[index] = "4";
      break;
      case "u":
        string[index] = "5";
      break;
        
    }
  }
return string.join("");
}
console.log(encode("hi there!"));

function decode(string) {
string = string.split('');
  for (let index = 0; index < string.length; index += 1){
    switch (string[index]){
      case "1":
        string[index] = "a";
        break;
      case "2":
        string[index] = "e";
        break;
      case "3":
        string[index] = "i";
        break;
      case "4":
        string[index] = "o";
        break;
      case "5":
        string[index] + "u";
        break;
    }
  }
return string.join('');
}
console.log(decode(string));
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
