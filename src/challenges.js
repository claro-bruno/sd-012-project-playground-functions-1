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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
