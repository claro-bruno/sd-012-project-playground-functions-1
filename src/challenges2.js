// Desafio 10
function techList(tech, name) {
  let techListObject = {
    tech: '',
    name: ''
  }

  for (index = 0; index < tech.length; index += 1) {
    techListObject.tech = tech;
    techListObject.name = name;
  }

  return `${tech[index]}, ${name}`;
}


console.log(techList(['teste', 'teste', 'teste'], 'daniel'));

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
