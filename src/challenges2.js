// Desafio 10

function techList(techName, name) {
  if (!techName.length) 
  return 'Vazio!';
  let arrayFinal = [];
  for (let i = 0; i < techName.length; i += 1) {
  for (let i in techName.sort()) {
    let pull = {
      tech: techName[i],
      name: name,
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
