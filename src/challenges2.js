// Desafio 11 - ESLint
function repeatedNumber(numeros) {
  let result = false;
  numeros.forEach((item) => {
    if (numeros.filter((itemSec) => itemSec === item).length > 2) {
      result = true;
    }
  });
  return result;
}

// Desafio 10
function techList(technology, person) {
  if (technology.length < 1) return 'Vazio!';
  technology.sort();
  return technology.map((item) => ({
    tech: item,
    name: person,
  }));
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) return 'Array com tamanho incorreto.';
  const correctLimit = number.every((item) => item >= 0 && item < 10);
  if (!correctLimit || repeatedNumber(number)) {
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
