// Desafio 1

let on = false;
function compareTrue(tv, radio) {

  if (tv != on && radio != on) {
    return true;
        
  }else{
    return false;
  }
}

console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));


// Desafio 2


function calcArea(base, heigth) {
 
  return (base * heigth) / 2;

}

console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))


// Desafio 3
function splitSentence(string) {

return string.split(' ')

}
console.log(splitSentence("go Trybe"))
console.log(splitSentence("vamo que vamo"))
console.log(splitSentence("foguete"))


// Desafio 4
function concatName(nomes){

let last = nomes[0];
let first = nomes[nomes.length -1]


return first = first.concat(', ' + last)
 
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']))
console.log(concatName(['captain', 'my', 'captain']))




// Desafio 5
function footballPoints(wins, ties) {
  let calculo = (wins * 3) + (ties * 1);

return calculo
}
console.log(footballPoints(14,8))
console.log(footballPoints(1,2))
console.log(footballPoints(0,0))

// Desafio 6

function highestCount(array) {
  
  
 let numM = Math.max(...array);
 let contagem = 0;
 for (i = 0; i < array.length; i += 1) {
   if (numM === array[i]){
    contagem += 1
   }
 }
 return contagem
}
console.log(highestCount([9, 1, 2, 3, 9, 2, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
console.log(highestCount([0, 0, 0]))

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {

  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2){
    return 'cat1';

  }if (distanceCat1 > distanceCat2){
    return 'cat2';
  
  }if (distanceCat1 === distanceCat2){
  return 'os gatos trombaram e o rato foge';
  }
}
//console.log(catAndMouse(0,3,2))


// Desafio 8
function fizzBuzz(array) {
 result = 0;
  array = [];
  for (index = 0; index < array; index +=1 ){
  if(array % 3 === 0 && array % 5 === 0){
    return  'FizzBuzz'
  }else if(array % 5 == 0){
    return  'Buzz'
  }else if(array % 3 == 0){
    return  'Fizz'
  }else{
    return 'Bug'
  }
  return result
}
}


console.log(fizzBuzz([21, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25]))


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
