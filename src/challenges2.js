// Desafio 10
function techList(lista, nome) {
  let listaObjetos = []
  let objeto
  for (let key in lista.sort()) {
    objeto = {
      tech: lista[key],
      name: nome
    }
    listaObjetos.push(objeto);
  }
  return listaObjetos.sort();
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

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))