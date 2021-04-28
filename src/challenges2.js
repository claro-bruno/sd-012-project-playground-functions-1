// Desafio 10

function techList(array, name) {
  let arrayDeObjeto = [];

  let arrayOrdenado = array.sort();

  for (let key in array) {
    const object = { 
      tech: arrayOrdenado[key],
      name: name
    };

    arrayDeObjeto.push(object);
  };

  if (array === []) {
    arrayDeObjeto = "Vazio!";
  }

  return arrayDeObjeto;
};

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
