// Desafio 10
function techList(techArray, nameInput) {
  // seu código aqui
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  techArray.sort();
  let outArray = [];
  for (index = 0; index < techArray.length; index += 1) {
    outArray[index] = {tech: techArray[index], name: nameInput};
  }
  return outArray;
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
