// Desafio 10
function createArrayTechList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  let objects = [];

  for (let indexTech = 0; indexTech < tech.length; indexTech += 1) {
    objects[indexTech] = {
      tech: tech[indexTech],
      name,
    };
  }

  return objects;
}

function techList(tech, name) {
  let objects = createArrayTechList(tech, name);

  let change;

  for (let indexArray = 0; indexArray < objects.length; indexArray += 1) {
    for (let indexArray2 = 0; indexArray2 < objects.length; indexArray2 += 1) {
      if (objects[indexArray].tech < objects[indexArray2].tech) {
        change = objects[indexArray].tech;
        objects[indexArray].tech = objects[indexArray2].tech;
        objects[indexArray2].tech = change;
      }
    }
  }

  return objects;
}

// Desafio 11
function checkNumbers(numbers) {
  if (numbers.length !== 11) {
    return 1;
  }
  return 0;
}

function checkNumbers2(numbers) {
  for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] < 0 || numbers[indexNumbers] > 9) {
      return 2;
    }
  }
  return 0;
}

function checkNumbers3(numbers) {
  let counter = 0;

  for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    for (let indexCheck = 0; indexCheck < numbers.length; indexCheck += 1) {
      if (numbers[indexNumbers] === numbers[indexCheck]) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return 2;
    }
    counter = 0;
  }
  return 0;
}

function numberHasError(numbers) {
  let test1 = checkNumbers(numbers);
  let test2 = checkNumbers2(numbers);
  let test3 = checkNumbers3(numbers);

  if (test1 === 1) {
    return 1;
  }
  if (test2 === 2 || test3 === 2) {
    return 2;
  }

  return 0;
}

function createPhoneArray(numbers) {
  let arrayNumbers = ['(', ' ', ' ', ')', '_', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' '];

  for (let index = 0; index < numbers.length; index += 1) {
    for (let indexArray = 0; indexArray < arrayNumbers.length; indexArray += 1) {
      if (arrayNumbers[indexArray] === ' ') {
        arrayNumbers[indexArray] = numbers[index];
        break;
      }
    }
  }

  return arrayNumbers;
}

function generatePhoneNumber(numbers) {
  if (numberHasError(numbers) === 1) {
    return 'Array com tamanho incorreto.';
  }
  if (numberHasError(numbers) === 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let number = createPhoneArray(numbers);
  number[4] = ' ';

  return number.join('');
}

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

// Desafio 12
function triangleCheckLineA(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }

  return false;
}
function triangleCheckLineB(lineA, lineB, lineC) {
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }

  return false;
}
function triangleCheckLineC(lineA, lineB, lineC) {
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }

  return false;
}

function triangleCheckABC(lineA, lineB, lineC) {
  let checkA;
  if (triangleCheckLineA(lineA, lineB, lineC) === true) {
    checkA = true;
  }
  let checkB;
  if (triangleCheckLineB(lineA, lineB, lineC) === true) {
    checkB = true;
  }
  let checkC;
  if (triangleCheckLineC(lineA, lineB, lineC) === true) {
    checkC = true;
  }
  return `${checkA}, ${checkB}, ${checkC}`;
}

function triangleCheck(lineA, lineB, lineC) {
  if (triangleCheckABC(lineA, lineB, lineC) === 'true, true, true') {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/[0-9]+/g);
  let counter = 0;
  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
    let indexToNumber = Number(array[indexArray]);
    counter += indexToNumber;
  }
  let result;
  if (counter > 1) {
    result = `${counter} copos de água`;
  } else {
    result = '1 copo de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
