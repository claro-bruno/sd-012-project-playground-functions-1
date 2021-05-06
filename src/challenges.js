// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui 
  
  if (value1 === true && value2 === true) {
    return true; 
  };
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return ((base * height) / 2); 
};

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui

  return (sentence.split(' '));
};

// Desafio 4
function concatName(name) {
  // seu código aqui

  return (name[lenght - 1] + ',' + name[0]);
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  return ((wins * 3) + ties); 
};

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui

  let highestValues = Math.max.apply(Math, arrayNum); 
  let result = 0; 

  for (let key of arrayNum) {

    if (key === highestValues) {
      result += 1; 
    };
  };

  return result; 
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distance = {
    distanceCat1: Math.abs(mouse - cat1),
    distanceCat2: Math.abs(mouse - cat2) 
  };

  if (distance.distanceCat1 > distance.distanceCat2) {
    return "cat2";
  } else if (distance.distanceCat2 > distance.distanceCat1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  };
};


// Desafio 8
function fizzBuzz(arrayNum2) {
  // seu código aqui

  let arrayResult = [];

  for (let count = 0; count < arrayNum2.length; count += 1) {
    if (arrayNum2[count] % 3 === 0 && arrayNum2[count] % 5 === 0) {
      arrayResult[count] = 'fizzBuzz';
    } else if (arrayNum2[count] % 3 === 0) {
      arrayResult[count] = 'fizz'; 
    } else if (arrayNum2[count] % 5 === 0) {
      arrayResult[count] = 'buzz'; 
    } else {
      arrayResult[count] = 'bug!'; 
    }
  }
  
  return arrayResult; 
};

// Desafio 9
function encode(string) {
  // seu código aqui

  let vowels = string; 

  vowels = vowels.replace(/a/g, '1');
  vowels = vowels.replace(/e/g, '2');
  vowels = vowels.replace(/i/g, '3');
  vowels = vowels.replace(/o/g, '4');
  vowels = vowels.replace(/u/g, '5');

  return vowels; 
};

function decode(string) {
  // seu código aqui

  let numbers = string; 

  numbers = numbers.replace(/1/g, 'a');
  numbers = numbers.replace(/2/g, 'e');
  numbers = numbers.replace(/3/g, 'i');
  numbers = numbers.replace(/4/g, 'o');
  numbers = numbers.replace(/5/g, 'u');

  return numbers; 
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
