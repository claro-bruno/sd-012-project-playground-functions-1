// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui  

    if (value1 == true && value2 == true) {
      return true; 
    } else {
      return false; 
    };
};

console.log(compareTrue());

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return (base * height) / 2; 
};

console.log(calcArea()); 

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  return (wins * 3 + ties * 1); 
};

console.log(footballPoints()); 

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui

  
}

// Desafio 8
function fizzBuzz([]) {
  // seu código aqui

  for (count = 0; count < fizzBuzz.length; count += 1); 
    if (fizzBuzz.count / 3 === 0) {
      console.log('fizz');
    } else if (fizzBuzz.count / 5 === 0) {
      console.log('buzz');
    } else if (fizzBuzz.count / 3 === 0 && fizzBuzz.count / 5 === 0) {
      console.log('fizzBuzz')
    } else {
      console.log('bug!')
    };
};

console.log(fizzBuzz());

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
