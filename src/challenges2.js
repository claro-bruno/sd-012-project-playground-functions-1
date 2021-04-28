// Desafio 10
function techList(skills, name) {
  if (skills.length === 0) {
    return 'Vazio!'
  }
  let saida = [];
  for (skill of skills.sort()) {
    let indice = {
      tech: skill,
      name: name,
    };
    saida.push(indice);
  }
  return saida;
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
