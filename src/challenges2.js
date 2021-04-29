// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  let respArray = [];
  for (let objeto in array) {
    respArray[objeto] = { tech: array[objeto], name: name };
  }
    return respArray;
}

// Saída:))

// Desafio 11
function validatePhoneNumber(numbers) {
  if (numbers.length !== 11) { return 'Array com tamanho incorreto.' };
  for (let number of numbers) {
    let cont = 0;
    for (let check of numbers) { if (number === check) { cont += 1 } };
    if (number < 0 || number > 9 || cont >= 3) { return 'não é possível gerar um número de telefone com esses valores' };
  }
  return 'ok';
}

function generatePhoneNumber(numbers) {
  if (validatePhoneNumber(numbers) === 'ok') {
    let telNumber = '';
    for (let number in numbers) {
      if (number == 0) { telNumber += '(' };
      if (number == 2) { telNumber += ') ' };
      if (number == 7) { telNumber += '-' };
      telNumber += numbers[number];
    }
    return telNumber;
  }
  return validatePhoneNumber(numbers);
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
