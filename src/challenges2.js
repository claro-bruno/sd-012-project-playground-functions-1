// Desafio 10
function techList(tecName, name) {
  // seu código aqui
  let techNameOrdenado = tecName.sort();
  let tecListReturn = [];
  if (tecName.length !== 0) {
    for (let key = 0; techNameOrdenado.length > key; key += 1) {
      let tecList = {
        tech: techNameOrdenado[key],
        n4me: name,
      };
      tecListReturn.push(tecList);
    }
  } else {
    return 'Vazio!';
  }
  return tecListReturn;
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
