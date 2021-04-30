// Desafio 1
function compareTrue(value1, value2) {
  let result1;

  if (value1 === true && value2 === true) {
    result1 = true;
  } else {
    result1 = false;
  }
  return result1;
}

// Desafio 2
function calcArea(base, height) {
  let result2 = (base * height) / 2;
  return result2;
}

// Desafio 3 (Fonte: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split)
function splitSentence(sentence) {
  let result3 = sentence.split(' ');
  return (result3);
}

// Desafio 4
function concatName(lastFirst) {
  let firstArray = lastFirst[0];
  let lastArray = lastFirst[(lastFirst.length) - 1];
  let result4 = `${lastArray}, ${firstArray}`;
  return (result4);
}

// Desafio 5
function footballPoints(wins, ties) {
  let result5 = (wins * 3) + (ties * 1);
  return (result5);
}

// Desafio 6
function highestCount(highestNumber) {
  let orderNumber = highestNumber.sort();
  let resultado = [];

  for (let index = 0; index < orderNumber.length; index += 1) {
    if (orderNumber[index] === orderNumber[(orderNumber.length - 1)]) {
      resultado.push(orderNumber[index]);
    }
  }
  return (resultado.length);
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
