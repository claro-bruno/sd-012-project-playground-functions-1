// Desafio 10
function techList(array, name) {
  // seu código aqui
  let listaObjetos = [];

  for (let i = 0; i < array.length; i += 1) {
    listaObjetos.push({ name, objeto: array[i] });
  }
  return listaObjetos;
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
