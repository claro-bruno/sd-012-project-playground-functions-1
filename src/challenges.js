// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  } else if(param1 !== param2) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let resultado = (base * altura) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  let concatenaNome = (array[array.length - 1]) + ', ' + array[0];
  return concatenaNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1)
  return pontuacao;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let repeticoes = 0;
  let maiorNumero = arrayNumeros[0];
  for(let key in arrayNumeros){
    if (arrayNumeros[key] > maiorNumero) {
      maiorNumero = arrayNumeros[key];
    }
  }
  for(let key in arrayNumeros) {
    if (maiorNumero === arrayNumeros[key]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = '';
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance > cat2Distance) {
    firstCat = 'cat2';
  } else if (cat1Distance < cat2Distance) {
    firstCat = 'cat1';
  } else {
    firstCat = 'os gatos trombam e o rato foge';
  }
  return firstCat;
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let fraseFizzBuzz = [];
  for(let key in arrayNumeros){
    if ((arrayNumeros[key]) % 3 === 0 && (arrayNumeros[key]) % 5 > 0) {
      fraseFizzBuzz.push ('fizz');
    } else if ((arrayNumeros[key]) % 5 === 0 && (arrayNumeros[key]) % 3 > 0){
      fraseFizzBuzz.push ('buzz');
    } else if ((arrayNumeros[key]) % 3 === 0 && (arrayNumeros[key]) % 5 === 0){
      fraseFizzBuzz.push ('fizzBuzz');
    }else {
      fraseFizzBuzz.push ('bug!');
    }
  }
  return fraseFizzBuzz;
}

// Desafio 9
function encode(string) {
  let stringEncode = '';
  for(let key in string){
    switch(string[key]) {
      case 'a':
        stringEncode += '1';
        break;
      case 'e':
        stringEncode += '2';
        break;
      case 'i':
        stringEncode += '3';
        break;
      case 'o':
        stringEncode += '4';
        break;
      case 'u':
        stringEncode += '5';
        break;
      default:
        stringEncode += string[key];
        break;
    }
  }
  return stringEncode;
}

function decode(string) {
  let stringDecode = '';
  for(let key in string){
    switch(string[key]) {
      case '1':
        stringDecode += 'a';
        break;
      case '2':
        stringDecode += 'e';
        break;
      case '3':
        stringDecode += 'i';
        break;
      case '4':
        stringDecode += 'o';
        break;
      case '5':
        stringDecode += 'u';
        break;
      default:
        stringDecode += string[key];
        break;
    }
  }
  return stringDecode;
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
