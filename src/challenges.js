// Desafio 1
function compareTrue(a,b) {
    if(a==true && b==true){
      return true;
    }
    else{
      return false;
    }
}

// Desafio 2
function calcArea(base,height) {
  let c=0;
  c=(base*height)/2;
  return c;
}

// Desafio 3
function splitSentence(string) {
  for(let i=0;i<string.length;i+=1){
    let string2='';
    string2=string.split(' ',string.length)
    return string2
  }
}

// Desafio 4
function concatName(array) {
  let resultado='';
  resultado=array[array.length-1]+', '+array[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos=0;
  pontos=wins*3+ties;
  return pontos;
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
