// Desafio 1
function compareTrue(valor1, valor2) {
  if((valor1 === true) && (valor2 === true)){
    return (true);
  }
  else {
    return (false);
  };
};
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  
  let areaDoTriangulo = (base * height) / 2;
  return (areaDoTriangulo);
};
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let sentence = [];
  let word = frase;
  let palavra = "";
  for (let index = 0; index < word.length; index += 1){
      
    if (word[index] === " "){
        sentence.push(palavra);
        palavra = "";
      }
    else {
        palavra += word[index];
      };
  };
  sentence.push(palavra);
  return sentence;
};
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(string) {
  
  let firstString = string[0];
  let lastString = string[string.length - 1];

  return lastString + ", " + firstString;

};
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = wins * 3;
  let total = totalWins + ties;
  return total;
};
console.log(footballPoints(14, 8));

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
