// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  // teste
  if (val1 && val2 === true){
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = base*height/2;
  return area
}
console.log(calcArea(51,1))
console.log(calcArea(10,50))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = string.split(' ');
  return frase
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  // seu código aqui
 let positionLastArray = array.length
  let lastFirst = array [positionLastArray-1]+',' + " " + array [0];
  return lastFirst;
}
console.log(concatName(['foguete', 'nao', 'tem', 're']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 3*wins + ties;
  return points;
}
console.log (footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let higherNumber = numbers[0];
  let counter = 0;
  for (count = 1; count < numbers.length; count += 1) {
if (numbers[count] > higherNumber) {
  higherNumber = numbers[count];
}
}
 for (count = 0; count < numbers.length; count += 1) {
   if (numbers[count] === higherNumber){
 counter += 1;
   }
  }
  
  
  return counter;
}
console.log (highestCount([2,4,31,31,31,30,4,31,31]))


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distmc1 = Math.abs(cat1 -mouse);
  let distmc2 = Math.abs(cat2 - mouse);
  if (distmc1 < distmc2){
  return "cat1";
  }
  else if (distmc1 > distmc2){
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(12,5,5))
console.log(catAndMouse(1,5,6))
console.log(catAndMouse(1,3,2))

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
let numberList = [];
for (index = 0; index < array.length; index += 1){   
if (array[index] %3 === 0 && array[index] %5 === 0){
  numberList.push ("fizzBuzz");
}
else if (array[index] %3 === 0){
  numberList.push ("fizz");
  }
else if (array[index] %5 === 0){
  numberList.push ("buzz");
}

else  {
  numberList.push ("bug!");
}

}

return numberList;
  }

console.log(fizzBuzz([13,15,10, 11, 3, 55, 0]))

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
