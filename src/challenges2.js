// Desafio 10
function techList(tech, name) {
  let resultado = []
  let lista = {};
  let listaOrdenada = tech.sort();
  if(tech.length === 0) {
    return 'Vazio!'
  } else {
    for(let key in listaOrdenada) {
      lista = {
        tech: tech[key],
        name: name,
      }
      resultado.push(lista);
    }
  }
  return resultado;
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
