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

  return `${names[names.length - 1]} ${names[0]}`;
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
    distanceCat1 * -1 == distanceCat1; 
  };
  
  if (distanceCat2 < 0) {
    distance * -1 == distanceCat2; 
  };

  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge"; 
  } else if (distanceCat1 > distanceCat2) {
    return "cat1"; 
  } else {
    return "cat2"; 
  ;}
};

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui

  let result = []; 
  for (let count = 0; count < arrayNum.length; count += 1) {
    if (arrayNum[count] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNum[count] % 5 === 0) {
      result.push('buzz');
    } else if (arrayNum[count] % 3 === 0 && arrayNum[count] / 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
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
