// Desafio 10
function techList(array, name) {
  let techs = [];
  let returnTechs = 0;
  let order = array.sort();
  if (order.length !== 0) {
    for (let index = 0; index < order.length; index += 1) {
      techs[index] = {
        tech: order[index],
        name,
      };
    }
    returnTechs = techs;
  } else {
    returnTechs = 'Vazio!';
  }
  return returnTechs;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],
  'Matheus'));

// Desafio 11
let validNumber = true;
let count = 0;
let number = [];
let result = '';
function mapNumbers(numbers, length2) {
  for (let index = 0; index < length2; index += 1) {
    if (number[numbers] === number[index]) {
      count += 1;
    }
  }
}

function validateNumber(length) {
  for (let index = 0; index < length; index += 1) {
    mapNumbers(index, length);
    if (number[index] < 0 || number[index] > 9 || count >= 3) {
      validNumber = false;
      result = 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
  }
}

function generatePhoneNumber(array) {
  result = ''; validNumber = true; count = 0; number = array;
  if (number.length !== 11) {
    validNumber = false;
    result = 'Array com tamanho incorreto.';
  }
  if (validNumber) {
    validateNumber(number.length);
  }
  if (validNumber) {
    let phoneNumber = ['(', number[0], number[1], ') ', number[2], number[3], number[4], number[5],
      number[6], '-', number[7], number[8], number[9], number[10]];
    for (let index = 0; index < phoneNumber.length; index += 1) {
      result += phoneNumber[index];
    }
  }
  return result;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
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
