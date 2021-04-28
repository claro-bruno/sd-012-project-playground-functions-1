// Desafio 10
function techList(techNames, nome) {
  let result = [];
  let techSorted = techNames.sort();
  for (let i = 0; i < techSorted.length; i += 1) {
    let objeto = {
      tech: '',
      name: nome,
    };
    objeto.tech = techSorted[i];
    result.push(objeto);
  }
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
