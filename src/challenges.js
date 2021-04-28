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
};
let sentence = 'go Tybe';
console.log(splitSentence(sentence));

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let last = arr[arr.length - 1];
  let first = arr[0];
  let together = last + ' ' + first;
  return together;
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));





// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  let points = (wins*3) + ties;
  return points;
}
console.log(footballPoints(1, 2))





// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let highest = arr[0];
  let count = 0;
  for(let index = 0; index < arr.length;index +=1){
    if(highest < arr[index]) {
      highest = arr[index];
    };
  }
  for (let index of arr){
    if (index === highest){
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
