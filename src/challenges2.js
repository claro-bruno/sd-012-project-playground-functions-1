/* eslint-disable no-else-return */
// Desafio 10
function techList(techNames, nome) {
  let result = [];
  if (techNames.length > 0) {
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
  } else {
    return 'Vazio!';
  }
}

console.log(techList([], 'Lucas'));

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
