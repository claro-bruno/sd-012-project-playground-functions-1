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
  let Cat1 = Math.abs(mouse - cat1);
  let Cat2 = Math.abs(mouse - cat2);
  if(Cat1 < Cat2){
    return 'cat1';
  } else if (Cat1 > Cat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
};

// Desafio 8
function fizzBuzz(Array) {
  let result = [];
  for(index in Array){
    if(Array[index] % 3 == 0 && Array[index] % 5 == 0){
      result.push('fizzBuzz');
    } else if (Array[index] % 3 == 0){
      result.push('fizz');
    } else if (Array[index] % 5 == 0 ){
      result.push('Buzz');
    } else {
      result.push('bug!');
    };
 
  };
  return result;
};

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
