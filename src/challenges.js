// Desafio 1
function compareTrue(bool, bool2) {
  if (bool === true && bool2 === true) {
    return true;
  } else {
    return false;
  };
};

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
};

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  
  let finalArray = [];
  let actualWord = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      actualWord += str[index];
    } else {
      finalArray.push(actualWord);
      actualWord = '';
    };
  };
  finalArray.push(actualWord);
  return finalArray;
};

console.log(splitSentence('foguete'));



// Desafio 4
function concatName() {
  // seu código aqui
}

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
