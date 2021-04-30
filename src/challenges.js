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

// Desafio 6  
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let repeat = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > higherNumber){
      higherNumber = numbers[index];
    } 
  } 
  for (let key in numbers){
    if (numbers[key] === higherNumber)
    repeat += 1;
  } return repeat; 
}  

//console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

//>>>>>highestCount(){
//>>>>>return higherNumber * higherNumber;
//}
//console.log(highestCount([-1,-2,-3,-4]));


// Desafio 7 -- 
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs (mouse - cat1);
  let distCat2 = Math.abs (mouse - cat2);
  if (distCat1 > distCat2){
    return 'cat2';
  } else if (distCat2 > distCat1){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
} 
//console.log(catAndMouse(0, 6, 6));

 









// Desafio 8
function fizzBuzz(number) {
//  if([number] / 3 ){
//    return "fizz";
//  } else if([number] % 3 === 0){
//    return = "buzz";
 // } else if (array[number] % 5 === 0)
} return array

// Desafio 9
function encode(string) {
  let split = string.split('');
for (let index = 0; < string.length; index += 1){
  if (string[index] === 'i') {
    string(index) = 3;
  }
 } return split;
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
