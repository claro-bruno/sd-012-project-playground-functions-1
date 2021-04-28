// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  let res = (base*height)/2;
  return res;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return (arr[arr.length-1] + ', ' + arr[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins + ties);
}

// Desafio 6
function highestCount(arr) {
  let greatestNum = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > greatestNum){
      greatestNum = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === greatestNum){
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse-cat1);
  let d2 = Math.abs(mouse-cat2);
  if (d1<d2)  { return 'cat1'; }
  if (d2<d1)  { return 'cat2'; }
  if (d1===d2){ return 'os gatos trombam e o rato foge'; }
}

// Desafio 8
function fizzBuzz(arr) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]%3 === 0 && arr[i]%5  !== 0){ arrRes.push('fizz'); }
    if (arr[i]%3 !== 0 && arr[i]%5  === 0){ arrRes.push('buzz'); }
    if (arr[i]%3 === 0 && arr[i]%5  === 0){ arrRes.push('fizzBuzz'); }
    if (arr[i]%3 !== 0 && arr[i]%5  !== 0){ arrRes.push('bug!'); }
  }
  return arrRes;
} console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++){
    arr.push(str[i]);
  }
  str = '';
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'a'){ arr[i] = 1; }
    if (arr[i] === 'e'){ arr[i] = 2; }
    if (arr[i] === 'i'){ arr[i] = 3; }
    if (arr[i] === 'o'){ arr[i] = 4; }
    if (arr[i] === 'u'){ arr[i] = 5; }
    str += arr[i];
  }
  return str;
}

function decode(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++){
    arr.push(str[i]);
  }
  str = '';
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == 1){ arr[i] = 'a'; }
    if (arr[i] == 2){ arr[i] = 'e'; }
    if (arr[i] == 3){ arr[i] = 'i'; }
    if (arr[i] == 4){ arr[i] = 'o'; }
    if (arr[i] == 5){ arr[i] = 'u'; }
    str += arr[i];
  }
  return str;
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
