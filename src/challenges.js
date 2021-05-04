// Desafio 1
function compareTrue(a,b) {
if (a === true && b === true){
      return true }
else {return false}
}
console.log(compareTrue(false,true));
console.log(compareTrue(false,false));
console.log(compareTrue(true,true));
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base,height) {
return((base*height)/2);
}
console.log(calcArea(10,50))
console.log(calcArea(5,2))
console.log(calcArea(51,1))

// Desafio 3
function splitSentence(a) {
return (a.split(" "))
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(a){
return (a[a.length - 1] + ", " + a[0]);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

  // Desafio 5
function footballPoints(wins, ties) {
  return(wins*3)+(ties*1)
}
console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(a) {
let maiorNumero = a[0]
for (index = 1; index <a.length; index +=1 ) {
  if (a[index] > maiorNumero){
    maiorNumero = a[index];
  }
}
let repeticao = 0
for  (index = 0; index < a.length; index +=1){
    if(a[index] == maiorNumero){
      repeticao = repeticao + 1;
    }
}
return repeticao;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

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
