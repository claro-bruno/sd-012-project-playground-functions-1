// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  else {
    return false;
  };
};

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2;

  return area;
};

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');

  return array;
};

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];

  let result = lastItem + ', ' + firstItem;

  return result;
};

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;

  return winPoints + tiePoints;
};

// Desafio 6
function highestCount(numbers) {
  let hightest = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > hightest) {
      hightest = numbers[index];
    };
  };

  let counter = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === hightest) {
      counter += 1;
    };
  };

  return counter;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  let result;

  if (distCat1 > distCat2) {
    result = 'cat2';
  }
  else if (distCat2 > distCat1) {
    result = 'cat1';
  }
  else {
    result = 'os gatos trombam e o rato foge';
  };

  return result;
};

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    }
    else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    }
    else {
      result.push('bug!');
    };
  };

  return result;
};

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
