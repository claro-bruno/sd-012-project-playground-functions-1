// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let negativeNumbers = 0;
  let doubleDigits = 0;
  let threeTimesRepeated = false;

  for (let char in numbers) {
    if (numbers[char] < 0) {
      negativeNumbers += 1;
    }
    if (numbers[char] > 9) {
      doubleDigits += 1;
    }
  }
  
  for (let index in numbers) {
    let repeatedNumbers = -1;
    for (let char in numbers) {
      if (numbers[char] === numbers[index]) {
        repeatedNumbers += 1;        
      }
      if (repeatedNumbers >= 3) {
        threeTimesRepeated = true;
      }
    }
  }

  if (numbers.length != 11) {
    return "Array com tamanho incorreto.";
  } else if ( negativeNumbers > 0 || doubleDigits > 0 || threeTimesRepeated === true ) {
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return '(' + numbers[0] + numbers[1] + ') '
    + numbers[2] + numbers[3] + numbers[4]
    + numbers[5] + numbers[6] + '-'
    + numbers[7] + numbers[8]
    + numbers[9] + numbers[10];
  }
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
