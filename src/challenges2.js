// Desafio 10
function techList(technologies, name) {
  let techsAndNameArray = [];
  for (let index = 0; index < technologies.length; index += 1) {
    techsAndNameArray[index] = {
      tech: technologies[index],
      name,
    };
  }
  for (let iteration = 1; iteration < techsAndNameArray.length; iteration += 1) {
    for (let indexObject = 0; indexObject < iteration; indexObject += 1) {
      let currentObject = techsAndNameArray[iteration].tech;
      let previusObject = techsAndNameArray[indexObject].tech;
      if (currentObject < previusObject) {
        let auxObject = currentObject;
        techsAndNameArray[iteration].tech = previusObject;
        techsAndNameArray[indexObject].tech = auxObject;
      }
    }
  }
  let result;
  if (technologies.length > 0) {
    result = techsAndNameArray;
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let result;
  if (numbers.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    let num = {};
    for (let value of numbers) {
      if (num[value] === undefined) {
        num[value] = 1;
      } else {
        num[value] += 1;
      }
    }
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] < 0 || numbers[index] > 9 || num[numbers[index]] >= 3) {
        result = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        let phoneNumberTemplate = '(xx) xxxxx-xxxx';
        let phoneNumber = phoneNumberTemplate.split('');
        let numbersIndex = 0;
        for (let subIndex = 0; subIndex < phoneNumber.length; subIndex += 1) {
          if (phoneNumber[subIndex] === 'x') {
            phoneNumber[subIndex] = numbers[numbersIndex];
            numbersIndex += 1;
          }
        }
        result = phoneNumber.join('');
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;
  let checkSideA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let checkSideB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let checkSideC = lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB);
  if (checkSideA && checkSideB && checkSideC) {
    triangle = true;
  }
  return triangle;
}

// Desafio 13
function hydrate(drinks) {
  let glassOfWater = 0;
  let numbersMatches = drinks.match(/\d+/g);
  for (let index of numbersMatches) {
    glassOfWater += parseInt(index, 10);
  }
  if (glassOfWater > 1) {
    glassOfWater = `${glassOfWater} copos de água`;
  } else {
    glassOfWater = `${glassOfWater} copo de água`;
  }
  return glassOfWater;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
