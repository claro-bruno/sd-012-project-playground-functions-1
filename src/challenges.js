// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if(boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height / 2);
  return area;
};
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  str = str.split(' ');
  return str;
}
let sentence = 'go Tybe';
console.log(splitSentence(sentence));

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let first = (`${arr[arr.length - 1]}` + ' ' + `${arr[0]}`);
  first.split(' ');
  return first.toString();
}
names = ['Gabriel', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(names));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  let points = (wins*3) + ties;
  return points;
}
console.log(footballPoints(1, 2))


// Desafio 6
function highestCount(arr, repCount) {
  // seu código aqui
  let rep = 0;
    arr.forEach(element => {
        if(element === repCount) {
            rep++
        };
    });
    return rep;
}
let numbers = 

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
