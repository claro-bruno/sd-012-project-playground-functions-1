// Desafio 11 - ESLint
function menorZero(numeros) {
  for (let num of numeros) {
    if (num < 0) {
      return true;
    }
  }
  return false;
}

function maiorNove(numeros) {
  for (let num of numeros) {
    if (num > 9) {
      return true;
    }
  }
  return false;
}

function validating(numeros, i) {
  let count = 0;
  for (let j = 0; j < numeros.length; j += 1) {
    if (numeros[i] === numeros[j]) {
      count += 1;
    }
  }
  return count;
}

function repeatedNumber(numeros) {
  let counter = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    counter = validating(numeros, i);
    if (counter >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneAuxiliar(numbers) {
  numbers = numbers.join('');
  return `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)}-${numbers.substring(7)}`;
}

// Desafio 10
function techList(technology, person) {
  if (technology.length < 1) {
    return 'Vazio!';
  }
  technology.sort();
  let result = [];
  let object = {};
  for (let index = 0; index < technology.length; index += 1) {
    object.tech = technology[index];
    object.name = person;
    result.push(object);
    object = {};
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (menorZero(number) || maiorNove(number) || repeatedNumber(number)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return generatePhoneAuxiliar(number);
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
