// Desafio 10
function techList(technology, person) {
  if (technology.length < 1) {
    return 'Vazio!';
  }
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
