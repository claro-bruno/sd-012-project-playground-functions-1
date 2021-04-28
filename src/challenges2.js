// Desafio 10

function techList(array, name) {
  let result;

  if (array.length > 0) {

    let arrayDeObjeto = [];
    let arrayOrdenado = array.sort();

      for (let key in array) {
        const object = { 
          tech: arrayOrdenado[key],
          name: name
        };

        arrayDeObjeto.push(object);
      };

    result = arrayDeObjeto;

  } else {
    result = "Vazio!"
  };

  return result;
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
