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
  let cat1Dist;
  let cat2Dist;

  if (mouse > cat1){
    cat1Dist = mouse - cat1;

  } else {
    cat1Dist = cat1 - mouse;
  };

  if (mouse > cat2){
    cat2Dist = mouse - cat2;

  } else {
    cat2Dist = cat2 - mouse;
  };

  if (cat1Dist < cat2Dist){
    catString1 = "cat1";
    return catString1;
  } else if (cat2Dist < cat1Dist){
    catString2 = "cat2";
    return catString2;
  } else {
    mousewin = "os gatos trombam e o rato foge";
    return mousewin;
  };
 
};
console.log(catAndMouse(0, 1, 2));

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
