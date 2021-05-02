// Desafio 10

function ordena (beforeOrdena) {

}

function techList(tecName, name) {
  // seu código aqui
  let techNameOrdenado = tecName.sort();
  let tecListReturn = []; 
  if (tecName.length !== 0) {
  for (const posicaoTechNameOrdenado in techNameOrdenado) {
    let tecList = {
      tech: techNameOrdenado[posicaoTechNameOrdenado],
      name: name
    }
    tecListReturn.push(tecList); 
  }
  } else {
    return 'Vazio!'
  }
  return tecListReturn;
}

console.log(techList([], "Lucas"))

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
