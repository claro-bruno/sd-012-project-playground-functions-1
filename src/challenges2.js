// Desafio 10
function techList() {
  // seu código aqui
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
function hydrate(mouse, cat1, cat2) {
  let distanciaMouse = mouse - cat1
  let distanciaMouse2 = mouse - cat2

  if (distanciaMouse == distanciaMouse2) {
    return "os gatos trombam e o rato foge"
  } else if (distanciaMouse <= 2 && distanciaMouse > distanciaMouse2) {
    return "cat1"
  } else if (distanciaMouse2 <= 2 && distanciaMouse2 > distanciaMouse) {
    return "cat2"

  }

  module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
  };
