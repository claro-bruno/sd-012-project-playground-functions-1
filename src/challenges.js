// Desafio 1
function compareTrue(boolean1 , boolean2) {
  // seu código aqui
  return boolean1 && boolean2 === true ? true : false;
}

// Desafio 2
function calcArea(base , height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  const firstElement = array.shift();
  const lastElement = array.pop();
  return `${lastElement}, ${firstElement}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0];
  for (number in array) {
    if (array[number] >= highestNumber) {
      let count = 0;
      highestNumber = array[number];
      for (position in array) {
        if (array[position] == array[number]) {
          count += 1;
        };
      };
      return count;
    };
  };
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  const newArray = [];
  for (let number = 0; number < array.length; number += 1) {
    if (array[number] % 3 == 0 && array[number] % 5 != 0) {
      newArray.push('fizz');
    } else if (array[number] % 3 != 0 && array[number] % 5 == 0) {
      newArray.push('buzz');
    } else if (array[number] % 3 == 0 && array[number] % 5 == 0) {
      newArray.push('fizzBuzz');
    } else if (array[number] % 3 != 0 && array[number] % 5 != 0) {
      newArray.push('bug!');
    };
  };
  return newArray;
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
