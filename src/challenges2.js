// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayObjects[index] = {
      tech: `${arrayTech[index]}`,
      name: `${name}`,
    };
  }
  return arrayObjects.sort((a, b) => (a.tech > b.tech ? 1 : -1));
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
