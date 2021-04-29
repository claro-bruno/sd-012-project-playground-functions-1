// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true ){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
};

// Desafio 4
function concatName(Array) {
  let phrase = Array;
  return  (phrase[phrase.length - 1]) + ', ' + (phrase[0]);
};

// Desafio 5
function footballPoints(wins, ties) {
  let allPoints = wins + ties;
  let points = 0;
  for (index = 0 ; index < allPoints; index ++){
    if(wins > 0){
      wins-= 1;
      points += 3;
    } else if(ties > 0){
      ties-= 1;
      points += 1;
    };
  };
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = numbers[0];
   for (let index in numbers){
    if(numbers[index] >= numbers[highNumber]){
      highNumber = numbers[index];
    };     
  };
    let indexHigh = [];
    let idx = numbers.indexOf(highNumber);
    while (idx != -1) {
      indexHigh.push(idx);
      idx = numbers.indexOf(highNumber, idx + 1);
    };
    return indexHigh.length
    /*
    return `O maior número é: ${highNumber}, e ele se repete: ${indexHigh.length} vezes.`;
    também serve para nomes...
    */
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = Math.abs(mouse)
  cat1 = Math.abs(cat1)
  cat2 = Math.abs(cat2)
  if((mouse - cat1) > (mouse - cat2)){
    return 'cat1'
  } else if ((mouse - cat1) < (mouse - cat2)){
    return 'cat2'
  } else if ((cat1 - cat2) == 0){
    return 'os gatos trombam e o rato foge'
  }
  
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
