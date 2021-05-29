// Desafio 10
const techList = (techs, name) => {
  if (techs.length === 0) return 'Vazio!';
  const listOfObjects = techs
    .sort()
    .map((tech) => ({ tech, name }));

  return listOfObjects;
};

// function createArrayTechList(listOfTechs, name) {
//   if (listOfTechs.length === 0) {
//     return 'Vazio!';
//   }

//   let objects = [];

//   for (let indexTech = 0; indexTech < listOfTechs.length; indexTech += 1) {
//     objects[indexTech] = {
//       tech: listOfTechs[indexTech],
//       name,
//     };
//   }

//   return objects;
// }

// function checkAndSort(objects, indexArray, indexArray2, change) {
//   if (objects[indexArray].tech < objects[indexArray2].tech) {
//     change = objects[indexArray].tech;
//     objects[indexArray].tech = objects[indexArray2].tech;
//     objects[indexArray2].tech = change;
//   }
//   return objects;
// }

// function techList(listOfTechs, name) {
//   let objects = createArrayTechList(listOfTechs, name);

//   let change;

//   for (let indexArray = 0; indexArray < objects.length; indexArray += 1) {
//     for (let indexArray2 = 0; indexArray2 < objects.length; indexArray2 += 1) {
//       checkAndSort(objects, indexArray, indexArray2, change);
//     }
//   }

//   return objects;
// }

// Desafio 11
const checkRepetition = (numbers) => numbers
  .map((number) => {
    const numberAppears = numbers.reduce((acc, curr) => {
      const result = curr === number ? acc += 1 : acc;
      return result;
    }, 0);
    return numberAppears;
  })
  .some((number) => number > 2);

const checkNumbers = (numbers) => {
  const error1 = 'Array com tamanho incorreto.';
  const error2 = 'não é possível gerar um número de telefone com esses valores';

  if (numbers.length !== 11) return error1;
  if (numbers.some((number) => number < 0 || number > 9)) return error2;
  if (checkRepetition(numbers)) return error2;

  return 'go';
};

// function checkNumbers2(numbers) {
//   for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//     if (numbers[indexNumbers] < 0 || numbers[indexNumbers] > 9) return 2;
//   }
//   return 0;
// }

// function checkRepetition(numbers, indexNumbers) {
//   let counter = 0;
//   for (let indexCheck = 0; indexCheck < numbers.length; indexCheck += 1) {
//     if (numbers[indexNumbers] === numbers[indexCheck]) counter += 1;
//   }
//   return counter;
// }

// function checkNumbers3(numbers) {
//   for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//     if (checkRepetition(numbers, indexNumbers) >= 3) return 2;
//   }
//   return 0;
// }

// function numberHasError(numbers) {
//   if (checkNumbers(numbers) === 1) return 1;
//   if (checkNumbers2(numbers) === 2 || checkNumbers3(numbers) === 2) return 2;

//   return 0;
// }

// function numberToArray(numbers, arrayNumbers, index) {
//   for (let indexArray = 0; indexArray < arrayNumbers.length; indexArray += 1) {
//     if (arrayNumbers[indexArray] === ' ') {
//       arrayNumbers[indexArray] = numbers[index];
//       return arrayNumbers;
//     }
//   }
// }

// function createPhoneArray(numbers) {
//   let arrayNumbers = ['(', ' ', ' ', ')', '_', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' '];

//   for (let index = 0; index < numbers.length; index += 1) {
//     arrayNumbers = numberToArray(numbers, arrayNumbers, index);
//   }

//   return arrayNumbers;
// }

const generatePhoneNumber = (numbers) => {
  if (checkNumbers(numbers) !== 'go') return checkNumbers(numbers);

  const numbersArray = numbers;
  const baseArray = ['(', ' ', ' ', ')', '_', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' '];

  const result = baseArray
    .map((item) => {
      if (item === ' ') return numbersArray.shift();
      if (item === '_') return ' ';
      return item;
    })
    .join('');

  return result;
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
const triangleCheckLineA = (lineA, lineB, lineC) =>
  lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);

const triangleCheckLineB = (lineA, lineB, lineC) =>
  lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);

const triangleCheckLineC = (lineA, lineB, lineC) =>
  lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);

// function triangleCheckABC(lineA, lineB, lineC) {
//   let checkA;
//   if (triangleCheckLineA(lineA, lineB, lineC) === true) {
//     checkA = true;
//   }
//   let checkB;
//   if (triangleCheckLineB(lineA, lineB, lineC) === true) {
//     checkB = true;
//   }
//   let checkC;
//   if (triangleCheckLineC(lineA, lineB, lineC) === true) {
//     checkC = true;
//   }
//   return `${checkA}, ${checkB}, ${checkC}`;
// }

const triangleCheck = (lineA, lineB, lineC) =>
  triangleCheckLineA(lineA, lineB, lineC)
  && triangleCheckLineB(lineA, lineB, lineC)
  && triangleCheckLineC(lineA, lineB, lineC);

// Desafio 13
const hydrate = (string) => {
  const totalBeverages = string
    .match(/[0-9]+/g) //  Source: https://stackoverflow.com/questions/42532450/extract-number-from-string-javascript
    .reduce((acc, curr) => Number(acc) + Number(curr));

  return totalBeverages > 1 ? `${totalBeverages} copos de água` : '1 copo de água';
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
