// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    return '(' + numbers[0] + numbers[1] + ') '
    + numbers[2] + numbers[3] + numbers[4]
    + numbers[5] + numbers[6] + '-'
    + numbers[7] + numbers[8]
    + numbers[9] + numbers[10];
  }
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
