// Desafio 1
//let nun1 = true;
//let nun2 = true;
//console.log(compareTrue(nun1, nun2));

  // valor booleano 2 tipos (verdadeiro ou false)
  // possui o operador logico && que recebe 2 valores 
  // testar somente a condicao true e o resto retorna false <<<< 

  function compareTrue(nun1, nun2) {
    if (nun1 === true && nun2 === true){
      return true;
    } return false;
  }; 


//function compareTrue(a, b) {
//  if(a == true && b == false) {
//    return false;
//  } else if(a == false && b == false) {
//    return false;
//  } else if(a == true && b === true){
//    return true;
//  } else {
//    return false;
//  };
//}


// Desafio 2
//let base = 10;
//let height = 50;

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
} 

//console.log(calcArea(base, height));

//let base = 5;
//let height = 2;

//*/function calcArea(base, height) {
//  let area = base * height / 2;
//  return area;
//} 
//console.log(calcArea(base, height));

//let base = 51;
//let height = 1;

//function calcArea(base, height) {
//  let area = base * height / 2;
//  return area;
//} 
//console.log(calcArea(base, height));


// Desafio 3
function splitSentence(string) {
      let msg = string.split(' ');
      return msg; 
}

// Desafio 4
function concatName(arrayStrings) {
  let firstName = arrayStrings[0];
  let lastName = arrayStrings[arrayStrings.length - 1];
  return lastName + ', ' + firstName;
} 
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
  let vicPoints = 3;
  let tiesPoint = 1;
  let quantidade = ((wins * vicPoints) + (ties * tiesPoint));
  return quantidade;
} 

//console.log(footballPoints(1, 2));

// Desafio 6  - PRECISA FINALIZAR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function highestCount(numbers) {
  let higherNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1){
    if (higherNumber < numbers[index]){
      higherNumber = numbers[index];
    }
  } 
  return higherNumber;
} 

//>>>>>highestCount(){
//>>>>>return higherNumber * higherNumber;
//}
// 


//console.log(highestCount([-1,-2,-3,-4]));


// Desafio 7 -- FAZER
function catAndMouse() {
  let cat1 = "cat1";
  let cat2 = "cat2";
  let erro = "os gatos trombam e o rato foge";
  let mouse;
  let mousePosition;
  let cat1Position;
  let cat2Position;
  let catAndMouse;




}

// Desafio 8
function fizzBuzz(number) {
  if([number] / 3 ){
    return "fizz";
  } else if([number] / 5){
    return = "buzz";
  } else if ([number] / 3 || /5)
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
