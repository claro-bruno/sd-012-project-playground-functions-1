// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
};

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
};

// Desafio 4
function concatName(strings) {
  let lastStringIndex = strings.length - 1;
  let concatArray = [strings[lastStringIndex], strings[0]];
  return concatArray.join(', ');
};

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
};

// Desafio 6
function highestCount(numbers) {
  let num = {};
  for (let value of numbers) {
    if (num[value] === undefined) {
      num[value] = 1;
    } else {
      num[value] += 1;
    };
  };
  let arrayNumKeys = Object.keys(num);
  let highestNumber = arrayNumKeys[0];
  for (let index = 1; index < arrayNumKeys.length; index += 1) {
    if (arrayNumKeys[index] > highestNumber) {
      highestNumber = arrayNumKeys[index];
    };
  };
  return num[highestNumber];
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(cat1 - mouse) - 1;
  let distanceMouseCat2 = Math.abs(cat2 - mouse) - 1;
  if (distanceMouseCat1 < distanceMouseCat2) {
    return "cat1";
  } else if (distanceMouseCat2 < distanceMouseCat1) {
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
