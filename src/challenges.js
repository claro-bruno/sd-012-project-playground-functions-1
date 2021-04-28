// Desafio 1
function compareTrue(valueA, valueB) {
  return (valueA && valueB);
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  let word = '';
  for(let index = 0; index < sentence.length; index += 1){
    if(index == sentence.length - 1){
      word += sentence[index];
      array.push(word);
    }
    else if(sentence[index] != ' '){
      word += sentence[index];
    }
    else{
      array.push(word);
      word = '';
    }
  }
  return array;
}
// let sentence = 'go Trybe';
// console.log(splitSentence(sentence));
// let sentence2 = 'vamo que vamo';
// console.log(splitSentence(sentence2));
// let sentence3 = 'foguete';
// console.log(splitSentence(sentence3));

// Desafio 4
function concatName(array) {
  let switched = '';
  let firstWord = array[0];
  let lastWord = array[array.length - 1];
  for(index = 0; index < lastWord.length; index += 1){
    switched += lastWord[index];
  }
  switched += ', ';
  for(index = 0; index < firstWord.length; index += 1){
    switched += firstWord[index];
  }
  return switched;
}
// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(array));
// let array2 = ['foguete', 'não', 'tem', 'ré'];
// console.log(concatName(array2));
// let array3 = ['captain', 'my', 'captain']
// console.log(concatName(array3));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let points = wins * winPoints + ties * tiePoints;
  return points;
}
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

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
