// Desafio 10
function createArrayTechList(listOfTechs, name) {
  if (listOfTechs.length === 0) {
    return 'Vazio!';
  }

  let objects = [];

  for (let indexTech = 0; indexTech < listOfTechs.length; indexTech += 1) {
    objects[indexTech] = {
      tech: listOfTechs[indexTech],
      name,
    };
  }

  return objects;
}

function techList(listOfTechs, name) {
  let objects = createArrayTechList(listOfTechs, name);

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
  if (numbers.length !== 11) return 1;

  return 0;
}

function checkNumbers2(numbers) {
  for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] < 0 || numbers[indexNumbers] > 9) return 2;
  }
  return 0;
}

function checkRepetition(numbers, indexNumbers) {
  let counter = 0;
  for (let indexCheck = 0; indexCheck < numbers.length; indexCheck += 1) {
    if (numbers[indexNumbers] === numbers[indexCheck]) counter += 1;
  }
  return counter;
}

function checkNumbers3(numbers) {
  for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (checkRepetition(numbers, indexNumbers) >= 3) return 2;
  }
  return 0;
}

function numberHasError(numbers) {
  if (checkNumbers(numbers) === 1) return 1;
  if (checkNumbers2(numbers) === 2 || checkNumbers3(numbers) === 2) return 2;

  return 0;
}

function numberToArray(numbers, arrayNumbers, index) {
  for (let indexArray = 0; indexArray < arrayNumbers.length; indexArray += 1) {
    if (arrayNumbers[indexArray] === ' ') {
      arrayNumbers[indexArray] = numbers[index];
      return arrayNumbers;
    }
  }
}

function createPhoneArray(numbers) {
  let arrayNumbers = ['(', ' ', ' ', ')', '_', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' '];

  for (let index = 0; index < numbers.length; index += 1) {
    arrayNumbers = numberToArray(numbers, arrayNumbers, index);
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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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
  let array = string.match(/[0-9]+/g); //  Source: https://stackoverflow.com/questions/42532450/extract-number-from-string-javascript
  let counter = 0;
  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
    let indexToNumber = Number(array[indexArray]);
    counter += indexToNumber;
  }

  if (counter > 1) return `${counter} copos de água`;

  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
