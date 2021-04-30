// Desafio 1
function compareTrue(bool1,bool2) {
  // seu código aqui
 if (bool1 === true && bool2 === true ) {
   return true
  }
  else {
    return false;
  }
};
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base * height)/ 2
};
// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ')
};
// Desafio 4
function concatName(string) {
  // seu código aqui
  let result = string[string.length -1] + ' ' + string[0]
  return result;
};
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let victory = wins * 3
  let empate = ties
  let pontos = empate + victory
  return pontos
};
// Desafio 6
function highestCount(array1) {
  // seu código aqui
  let maiorNum = array1[0];
  let Count = 1;
  for(let index = 1; index < array1.length; index += 1){
    if(array1[index] > maiorNum){
      maiorNum = array1[index];
      Count = 1;
    }
    else if(array1[index] === maiorNum){
     Count += 1;
    }
  }
  return Count;
};
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código 
  
  if (cat1 - mouse < cat2 - mouse) {
    let cat1win = 'cat1'
    return cat1win
  }else if (cat1 - mouse > cat2 - mouse) {
    let cat2win = 'cat2'
    return cat2win
  }if (cat1 - mouse === cat2 - mouse) {
    let catempat = 'os gatos trombam e o rato foge'
    return catempat
  }
};
// Desafio 8
function fizzBuzz() {
  // seu código aqui
  
};

// Desafio 9
function encode() {
  // seu código aqui
};
function decode() {
  // seu código aqui
};

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
