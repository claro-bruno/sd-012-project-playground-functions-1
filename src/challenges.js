// Desafio 1
function compareTrue(boolean1,boolean2) {
  if (boolean1 === true && boolean2 === true){
    return true;
  }else {
    return false;
  };
};

// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
};

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
};

// Desafio 4
function concatName(array) {
  let phrase = '';
  for(let index = 0; index<array.lenght;index+=1){
    if(index == 0){
      console.log(index);
      phrase+=`${array[array.lenght-1]}, `
    }else if(index === (array.lenght-1) ){
      phrase+= array[0];
    };
  };
  return phrase;
};

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3+ties);
}

console.log(footballPoints(0,0));

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
