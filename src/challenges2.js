// Desafio 10
function techList(name, tech) {
  let objeto = [];
  let lista = {};
  if (tech === "") {
    return "Vazio!"
  } else {
    tech.sort();
    for (let key in tech) {
      lista = {
        tech: tech[key],
        name: name
      };
      objeto.push(lista);
    }
  }
  return objeto;
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
