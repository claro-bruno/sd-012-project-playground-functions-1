// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push({ tech: `${array[index]}`, name });
  }
  return output;
}
// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let string = numbers.join('');
  numbers = numbers.sort(function (a, b) { return a - b; });
  if (numbers[0] < 0 || numbers[10] > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let occurrences = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] === numbers[index - 1]) {
      occurrences += 1;
      if (occurrences > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } else {
      occurrences = 1;
    }
  }
  string = '(' + string.substr(0, 2) + ') ' + string.substr(2, 5) + '-' + string.substr(7);
  return string;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineC) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
      return true;
    }
  }
  return false;
}
// Desafio 13
function hydrate(string) {
  // seu código aqui
  string = string.replace(/\D/g, '');
  let sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    sum = Number(string[index]) + sum;
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
