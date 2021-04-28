// Desafio 10
function techList(array, name) {
  let lista = [];
  for (let index = 0; index < array.length; index += 1){
  let technology = {
    tech: array[index], 
    name: name
  }
  lista.push(technology);
  }

  lista.sort(function (a,b){
    if (a.tech > b.tech)
    return 1;

    if (a.tech < b.tech)
    return -1;

    return 0;
  });
  return lista;
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
