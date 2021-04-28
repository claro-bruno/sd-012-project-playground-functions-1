// Desafio 10
function techList(array, name) {
  if (array[0] == null) {
    return "Vazio!";
  }
  let skills = [];
  let vet = array.sort();
  for (let i = 0; i < array.length; i++){
    skills[i] = {
      tech: vet[i],
      name: name
    }
  }
  return skills;
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
