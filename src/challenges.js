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

  return sentence.slipt(' ');
}

// Desafio 4
function concatName(names) {
  // seu código aqui

  return names[names.length - 1], names[0];
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  return (wins * 3 + ties * 1); 
};

// Desafio 6
function highestCount(numbers) {
  // seu código aqui

    let contadorHighestCount = 0;
    let highestValue = highestNumber(numbers);

    for (let indexHighestCount = 0; indexHighestCount < numbers.length; indexHighestCount += 1) {
      if (numbers[indexHighestCount] === highestValue) {
        contadorHighestCount += 1;
      }
    }
    return contadorHighestCount;
  }

  function highestNumber (numbers) {
    let maiorNumero = numbers[0];
    for (let indexHighestNumber = 0; indexHighestNumber < array2.length; indexHighestNumber += 1) {
      maiorNumero = numbers[indexHighestNumber] > maiorNumero ? array2[indexHighestNumber] : maiorNumero;
   }
   return maiorNumero;
  }

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
