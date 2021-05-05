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

  for (let firstIndex = 0; firstIndex < numberArray.length; firstIndex += 1) {
    if (numberArray[firstIndex] < 0 || numberArray[firstIndex] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    let numberCount = 0;

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
      phoneNumber += ' ';
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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return false;
  }

  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  }

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) || lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) || lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
}

// Desafio 13
function hydrate(drinksNumber) {
  // seu código aqui
  let numbers = drinksNumber.match(/\d+/g).map(Number);
  let drinkCount = 0;

  if (numbers[0] === 1 && numbers.length === 1) {
    return '1 compo de água'
  } 

  if (numbers.length > 1) {
    for (let index = 0; index < numbers.length; index += 1) {
      drinkCount += numbers[index];
    }

    return `${drinkCount} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
