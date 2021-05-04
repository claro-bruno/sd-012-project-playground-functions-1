// Desafio 1
// Primeiro commit
function compareTrue() {
  // seu código aqui

  let val1 = true;
  let val2 = true;
  let result = false;

  if (val1 === true && val2 === true) {
    result = true;
    console.log(result);
  } else if (val1 === false || val2 === false) {
    // eslint-disable-next-line no-unused-expressions
    result;
    console.log(result);
  }
}
compareTrue();

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangle = (base * height) / 2;
  console.log(triangle);
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence() {
  // seu código aqui

  let trybeString = 'go Trybe';
  let vqvString = 'vamo que vamo';
  let fogueteString = 'foguete';

  let stringToSplit = trybeString.split(' ');
  console.log(stringToSplit);

  stringToSplit = vqvString.split(' ');
  console.log(stringToSplit);

  stringToSplit = fogueteString.split(' ');
  console.log(stringToSplit);
}
splitSentence();

// Desafio 4
function concatName(name) {
  // seu código aqui
  let position1 = name[0];
  let position2 = name[name.length - 1];
  return position2 + "," + " " + position1;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let totalWins = wins * 3;
  let totalTies = ties * 1;

  let totalPoints = totalWins + totalTies;

  console.log(totalPoints);
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

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
