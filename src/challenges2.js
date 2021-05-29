// Desafio 10
const techList = (techs, name) => {
  if (techs.length === 0) return 'Vazio!';
  const listOfObjects = techs
    .sort()
    .map((tech) => ({ tech, name }));

  return listOfObjects;
};

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

// Desafio 12
const triangleCheckLineA = (lineA, lineB, lineC) =>
  lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);

const triangleCheckLineB = (lineA, lineB, lineC) =>
  lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);

const triangleCheckLineC = (lineA, lineB, lineC) =>
  lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);

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
