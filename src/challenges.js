// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else if (value1 === false || value2 === false) {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = sentence.split(" ");
  return arraySentence;
};

// Desafio 4
function concatName(list) {
  let arrayChange = [];
  for(let index = list.length - 1; index >= 0; index -= 1 ){
    if (index === 0 || index === (list.length -1)) {
      arrayChange.push(list[index]);
    }
  }

  return String.toString(arrayChange);
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
};

// Desafio 6
function highestCount(numbers) {
  let highValue = numbers[0];
  let count = 0;
  for(let number of numbers) {
    if (highValue < number) {
      highValue = number;
    };
  };
  for(let number of numbers) {
    if(numer === highValue){
      count += 1;
    };
  };
  return count;
};

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
