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
  if ((cat1-mouse) === (cat2-mouse)) {
    return "os gatos trombam e o rato foge";
  } else if ((cat1-mouse) > (cat2-mouse)){
    return "cat1";
  } else {
    return "cat2";
  }
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