// Desafio 1
function compareTrue(a, b) {
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
for (index = 1; index <a.length; index += 1 ) {
  if (a[index] > maiorNumero){
    maiorNumero = a[index];
  }
}
let repeticao = 0
for  (index = 0; index < a.length; index += 1){
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
function catAndMouse(mouse,cat1,cat2) {
 let distanciaCat1 = mouse - cat1
 let distanciaCat2 = mouse - cat2
 if (distanciaCat1 < distanciaCat2) {
  return ("cat1");
 } else if (distanciaCat1 === distanciaCat2){
  return ("os gatos trombam e o rato foge");
 } else if (distanciaCat1 > distanciaCat2){
  return ("cat2");
 }
}
console.log(catAndMouse(2,5,3));


// Desafio 8
function fizzBuzz(number) {
 let condicao =  []
  for (let index = 0; index < number.length; index += 1){
  if (number[index] % 3 === 0 && number[index] % 5 === 0){
    condicao.push("fizzBuzz");
      } else if (number[index] % 3 === 0){
      condicao.push("fizz");
      } else if (number[index] % 5 === 0){
        condicao.push("buzz");
      } else {
        condicao.push( "bug!")
     }
  }
return condicao
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {

}


// Desafio 10
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
