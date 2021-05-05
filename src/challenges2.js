// Desafio 10
function techList(techArray, nameInput) {
  // seu código aqui
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  techArray.sort();
  let outArray = [];
  for (index = 0; index < techArray.length; index += 1) {
    outArray[index] = {tech: techArray[index], name: nameInput};
  }
  return outArray;
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  // seu código aqui
  if (numberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let numberCount = 0;

  for (let firstIndex = 0; firstIndex < numberArray.length; firstIndex += 1) {
    if (numberArray[firstIndex] < 0 | numberArray[firstIndex] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let secondIndex = 0; secondIndex < numberArray.length; secondIndex += 1) {
      if (numberArray[firstIndex] === numberArray[secondIndex]) {
        numberCount += 1;
      }

      if (numberCount >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  let phoneNumber = '';

  for (let index = 0; index < numberArray.length; index += 1) {
    if (index === 0) {
      phoneNumber += '(';
      phoneNumber += numberArray[index];
    } else if (index === 2) {      
      phoneNumber += ')';
      phoneNumber += numberArray[index];
    } else if (index === 7) {      
      phoneNumber += '-';
      phoneNumber += numberArray[index];
    } else {
      phoneNumber += numberArray[index];  
    }    
  }
  return phoneNumber;
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
