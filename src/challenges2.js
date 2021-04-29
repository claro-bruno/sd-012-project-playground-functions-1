// Desafio 10
function techList(array, nome) {
  // seu código aqui
  if (!array.length) return 'Vazio!';
  let arrayFinal = [];
  for (let i = 0; i < array.length; i += 1) {
    let pull = {
      tech: array[i],
      name: nome,
    };
    arrayFinal.push(pull);
  }
  return arrayFinal;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
