// Desafio 11 - ESLint
function outLimit(numeros) {
  for (let num of numeros) {
    if (num < 0 || num > 9) {
      return true;
    }
  }
  return false;
}

// Continuação da função repeatedNumber para respeitar o ESLint;
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
  if (outLimit(number) || repeatedNumber(number)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  number = number.join('');
  return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(text) {
  let water = 0;
  let restrictions = /\d+/g;
  let loopItem = restrictions.exec(text);
  while (loopItem != null) {
    water += parseInt(loopItem[0], 10);
    loopItem = restrictions.exec(text);
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
