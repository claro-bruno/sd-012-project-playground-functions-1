// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true){
    return true;
  }
  else {
    return false;
  }
}
// console.log(compareTrue(true, false));
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");
}
// console.log(splitSentence("Hoje Vai dar boa"));
// Desafio 4
function concatName(array) {
  // seu código aqui
  return (array[array.length - 1] + ", " + array[0]);
}
// console.log(concatName(["Pedro", "Luiz", "Augusto"]));
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3*wins + ties);
}
// console.log (footballPoints(14, 8));
// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let max = numbers[0];
  for (let index = 1; index < numbers.length; index += 1){
    if(numbers[index] > max){
      max = numbers[index];
    }
  }
  let accumulator = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] === max){
      accumulator += 1;
    }
  }
  return accumulator;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if(cat1 < cat2){
    return "cat1";
  }
  else if(cat2 < cat1){
    return "cat2";
  }
  else if(cat1 === cat2){
    return "os gatos trombam e o rato foge";
  }
}
// console.log(catAndMouse(7,6,4))

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let strings = [];
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      strings.push("fizzBuzz");
    }
    else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0){
      strings.push("fizz");
    }
    else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0){
      strings.push("Buzz");
    }
    else if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0){
      strings.push("bug!");
    }
  }
  return strings;
}
// console.log(fizzBuzz([9, 25]))
// Desafio 9
function encode(input) {
  // seu código aqui
  input = input.replace(/a/g, "1");
  input = input.replace(/e/g, "2");
  input = input.replace(/i/g, "3");
  input = input.replace(/o/g, "4");
  input = input.replace(/u/g, "5");
  return input;
}
//console.log (encode("hi there!"));
function decode(input) {
  // seu código aqui
  input = input.replace(/1/g, "a");
  input = input.replace(/2/g, "e");
  input = input.replace(/3/g, "i");
  input = input.replace(/4/g, "o");
  input = input.replace(/5/g, "u");
  return input;
}
//console.log (decode("h3 th2r2!"));
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
