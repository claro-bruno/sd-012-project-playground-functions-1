// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if(boolean1 === true && boolean2 === true){
    return true;
  }else{
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let palavrasFrase = [""];
  let indexCounter = 0;
  for(letra of sentence){
    if(letra === " "){
      palavrasFrase.push("");
      indexCounter += 1;
    }else{
      palavrasFrase[indexCounter] += letra;
    };
  };
  return palavrasFrase;
};

// Desafio 4
function concatName(listaNomes) {
  // seu código aqui
  let concat = listaNomes[listaNomes.length - 1]+", "+listaNomes[0];
  return concat;
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
