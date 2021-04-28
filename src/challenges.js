// Desafio 1

function compareTrue(param1, param2) {
  let result;

  if(param1 === true && param2 === true) {
    result = true;
  } else {
    result = false;
  };

  return result;
}

// Desafio 2

function calcArea(base, height) {
  let areaDoTriangulo;

  areaDoTriangulo = (base * height)/2;

  return areaDoTriangulo;
};

// Desafio 3

function splitSentence(str) {
  let arrayDeStrings = [];
  let palavraSozinha = "";

  for (let index = 0; index < str.length; index += 1) {

    if (str[index] !== " " && index < str.length-1) {

      palavraSozinha += str[index];

    } else if (str[index] !== " " && index == str.length-1 ) {

      palavraSozinha += str[index];
      arrayDeStrings.push(palavraSozinha);

    } else {

      arrayDeStrings.push(palavraSozinha);
      palavraSozinha = "";

    };
  }

  return arrayDeStrings;
};

// Desafio 4
function concatName(array) {
  let strResult = "";

  strResult = array[array.length - 1] + ", " + array[0];

  return strResult;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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
