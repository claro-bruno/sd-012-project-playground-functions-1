// Desafio 1
function compareTrue(ParametroA, ParametroB) {
// seu código aqui
if(ParametroA === true && ParametroB === true){
  return true;
}else{
  return false;
}
}
//Teste da função
//let result = compareTrue(true,true)
//console.log(result);

// Desafio 2
function calcArea(base,heigth) {
//seu código aqui
//base = 51;
//heigth = 1;
calcArea = (base * heigth)/2;
return calcArea;
}
//Teste de função
//let result = calcArea(2,4);
//console.log(result);

// Desafio 3
function splitSentence(string) {
// seu código aqui

return string.split(' ');
}
//Teste de função
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstName = array[0];
  let lastName = array[(array.length -1)];
  let result = lastName + ', ' + firstName;
  return result;
}
//Teste de função
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  totalDePontos =  wins * 3 + ties;
  return totalDePontos;
}
console.log(footballPoints(0,0))

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
