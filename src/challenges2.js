// Desafio 10
function techList(lista, name) {
  let listaSaida = [];
  for (let index = 0; index < lista.length; index += 1) {
    let objeto = {
      tech: lista[index],
      name: name,
    };
    listaSaida.push(objeto);
  }
  return listaSaida.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return true;
  });  
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
