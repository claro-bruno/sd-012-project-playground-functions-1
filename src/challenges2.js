// Desafio 10
function techList(arrayTecnologias, name) {
  // seu código aqui
  let ordenado = arrayTecnologias.sort();
  let objeto = [];
  if (ordenado.length > 0) {
    for (let i = 0; i < ordenado.length; i += 1) {
      objeto[i] = { tech: ordenado[i], name: name };
    }
    return objeto;
  } else {
    return 'Vazio!';
  }
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
