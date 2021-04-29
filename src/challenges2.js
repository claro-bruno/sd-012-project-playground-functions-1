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
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB) { return false };
  return true;
}

// Desafio 13
function hydrate(pedido) {
  let numbers = pedido.match(/\d+/g).map(Number);
  let soma = 0;
  let resposta = '';
  for (let number of numbers) { soma += number };
  if (soma > 1) { resposta = `${soma} copos de água` } else { resposta = `${soma} copo de água`};
  return resposta;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
//link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
