// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
    if (boolean1 === true && boolean2 === true) {
      return true 
    } else {
      return false
    };
};

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura / 2)
};

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for (let word in string) {
    if (string[word] != ' ') {
      palavra = palavra + string[word]
      if ((word == (string.length - 1))) {
        array.push(palavra)
      };
    }  else {
      array.push(palavra)
      palavra = ''
    };
  };
  return array;
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
};

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
