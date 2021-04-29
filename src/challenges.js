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
function highestCount(highestCount) {
  let highest;
  let count = 0;
  let highestCount2 = highestCount;
  highest = Math.max.apply(null, highestCount);

  for (let index = 0; index < highestCount2.length; index += 1){
    
    if (highestCount2[index] === highest){
      count += 1;
    };

  };

  return count;
  

};
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catString1 = "";
  let catString2 = "";
  let mousewin = "";

  if (cat1 < cat2){
    catString1 = 'cat1';

  } else if (cat2 < cat1){
    catString2 = 'cat2';
  } else {
    mousewin = 'os gatos trombam e o rato foge';
  };
  let winner = catString1 + catString2 + mousewin;

  return winner;
};
console.log(catAndMouse(0, 6, 6));

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
