// Desafio 1
function compareTrue(firstOperator, secondOperator) {
  if (firstOperator === true && secondOperator === true) {
      return true;
  } else {
      return false;
  }
}
  // Desafio 2
function calcArea(base, height) {
  return (( base * height ) / 2 );
}
// Desafio 3
function splitSentence(string) {
  let words = string.split(" "); //Ref.: https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words#:~:text=Just%20use%20split%20%3A,%22%2C%20%22sentence.%22%5D
  return words;
}
// Desafio 4
function concatName(array) {
  return (array[(array.length) - 1] + ", " + array[0]);
}
// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}
// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let count = 0;
  for (let number in array) {
    if (array[number] > highestNumber) {
      highestNumber = array[number];
    }
  }
  for (let number in array) {
    if (array[number] === highestNumber) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1diff = (cat1 - mouse);
  let cat2diff = (cat2 - mouse);

    if((cat1 - mouse) < 0) {
      cat1diff = ((cat1 - mouse) * -1);
    }
    if((cat2 - mouse) < 0) {
      cat2diff = ((cat2 - mouse) * -1);
    }

  if (cat1diff === cat2diff) {
    return "os gatos trombam e o rato foge";
  } else if (cat1diff > cat2diff){
    return "cat2";
  } else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = [];
  for (let number in array) {
    if (((array[number] % 3) === 0
      && (array[number] % 5) !== 0)) {
      arrayReturn[number] = "fizz";
    } else if ((array[number] % 3) !== 0
      && (array[number] % 5) === 0) {
        arrayReturn[number] = "buzz";
    } else if ((array[number] % 3) === 0
      && (array[number] % 5) === 0) {
      arrayReturn[number] = "fizzBuzz";
    } else {
      arrayReturn[number] = "bug!";
    }
  }
  return arrayReturn;
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