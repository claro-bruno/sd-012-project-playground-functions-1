// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui  
  
    return value1 && value2 === true; 
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return (base * height) / 2; 
};

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui

  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  
  let firstName = names[0]; 
  let lastName = names[(names.length) - 1]; 
  let concName = `${lastName}, ${firstName}`;

  return concName;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  return (wins * 3 + ties * 1); 
};

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distanceCat1 = cat1 - mouse; 
  let distanceCat2 = cat2 - mouse; 

  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * -1; 
  };
  
  if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * -1; 
  };

  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge"; 
  } else if (distanceCat1 > distanceCat2) {
    return "cat2"; 
  } else {
    return "cat1"; 
  };
};

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui

  let result = []; 

  for (let count = 0; count < arrayNum.length; count += 1) {
    if (arrayNum[count] % 3 === 0 && arrayNum[count] % 5 === 0) {
      result[count] = 'fizzBuzz';
    } else if (arrayNum[count] % 3 === 0) {
      result[count] = 'fizz';
    } else if (arrayNum[count] % 5 === 0) {
      result[count] = 'buzz';
    } else {
      result[count] = 'bug!';
    }
  }
    return result; 
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
}
function decode() {
  // seu código aqui

  let numbers = string; 

  numbers = numbers.replace(/1/g, 'a');
  numbers = numbers.replace(/2/g, 'e');
  numbers = numbers.replace(/3/g, 'i');
  numbers = numbers.replace(/4/g, 'o');
  numbers = numbers.replace(/5/g, 'u');

  return numbers; 
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
