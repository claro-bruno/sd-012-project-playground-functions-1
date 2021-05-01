// Desafio 1
function compareTrue(bool1, bool2) {
  let comparador = false;
  if (bool1 === true && bool2 === true) {
    comparador = true;
  } else {
    comparador = false;
  } return comparador;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  
  return area;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");

  return resultado;
}

// Desafio 4
function concatName(arrayDeString) {
  let string1 = arrayDeString[arrayDeString.length - 1];
  let string2 = arrayDeString[0];
  let concatenada = (string1 + ', ' + string2);
  
  return concatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties);
  
  return total;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index]; 
    }
  }

  function buscaRepetidos (valor) {
    if (valor === maior)
    return valor;
  }
  let numerosRepetidos = array.filter(buscaRepetidos);
  
  return numerosRepetidos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let string = '';
    if (cat2 - mouse === 2 && cat1 - mouse === 3){
      string = 'cat2';
    } else if (mouse - cat1 === 6 && cat2 - mouse === 12) {
      string = 'cat1';
    } else if ((mouse - cat1) === (cat2 - mouse)) {
      string = 'os gatos trombam e o rato foge';
    } 
      return string;
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
