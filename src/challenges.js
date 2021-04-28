// Desafio 1

function compareTrue(firstValue,secondValue) {
  if(firstValue === true && secondValue === true){
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
  
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array
}


// Desafio 4

function concatName(names) {
  
  return names[names.length-1] + ", " + names[0]
}


// Desafio 5
function footballPoints(wins,ties) {
  return (3 * wins) + ties
}


// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > highestNumber){
      highestNumber = numbers[index];
    }
  }
  let counter = 0;
  for (let index2 = 0; index2 <numbers.length; index2 +=1){
    if(numbers[index2] === highestNumber){
      counter +=1;
    }
  }
  return counter
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(cat1 - mouse < cat2 - mouse) {
    return "cat1"
  } else if ( cat2 - mouse < cat1 - mouse){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge."
  };
  
}

console.log(catAndMouse(1,0,2));



// Desafio 8


function fizzBuzz(numbersFizzBuzz) {
  for(let index = 0; index < numbersFizzBuzz.length; index += 1) {       
    if (numbersFizzBuzz[index] % 3 == 0 & numbersFizzBuzz[index] % 5 != 0) {
      fizzBuzzBug.push('fizz');
    } else if (numbersFizzBuzz[index] % 3 != 0 & numbersFizzBuzz[index] % 5 == 0) {
      fizzBuzzBug.push('buzz');
    } else if(numbersFizzBuzz[index] % 3 == 0 & numbersFizzBuzz[index] % 5 == 0) {
      fizzBuzzBug.push('fizzBuzz');   
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  
  return fizzBuzzBug
}

console.log(fizzBuzz[2, 15, 7, 9, 45]);
console.log(fizzBuzz[7, 9]);
console.log(fizzBuzz[9, 25]);

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
