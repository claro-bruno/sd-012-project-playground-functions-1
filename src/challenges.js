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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * (-1);
  };
  let distanceCat2 = mouse - cat2;
  if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * (-1);
  };

  if (distanceCat1 > distanceCat2) {
    return "cat1";
  } else if (distanceCat2 > distanceCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  };
};

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
