// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  };
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let nome = arrayNames[arrayNames.length - 1] + ', ' + arrayNames[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let highestNumber = 0;
  let quantity = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index] > arrayNumbers[index2] && arrayNumbers[index] > highestNumber) {
        highestNumber = arrayNumbers[index];
      };
    };
  };
  for (let index3 = 0; index3 < arrayNumbers.length; index3 += 1) {
    if (arrayNumbers[index3] === highestNumber) {
      quantity += 1;
    };
  };
  return quantity;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let diffCat1Mouse = cat1 - mouse;
  let diffCat2Mouse = cat2 - mouse;

  if (diffCat1Mouse < 0) {
    diffCat1Mouse = diffCat1Mouse * -1;
  }
  
  if (diffCat2Mouse < 0) {
    diffCat2Mouse = diffCat2Mouse * -1;
  }

  if ((diffCat1Mouse) < (diffCat2Mouse)) {
    return 'cat1';
  } else if ((diffCat1Mouse) > (diffCat2Mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
}

console.log(catAndMouse(5, 4, 6))

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
