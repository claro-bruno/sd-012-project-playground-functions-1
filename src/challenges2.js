// Desafio 10
function techList(lista, nome) {
  let objLista = [];
  if (lista.length === 0) {
    return "Vazio!";
  } else {
    for (key in lista) {
      let objetos = {
        tech: lista[key],
        name: nome
      };
      objLista.push(objetos);
    };

  };
  return objLista;
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
