// Desafio 10
let listaTeste = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let nameTeste = "Lucas";

function techList(tech, name) {
  var listaObjetos = {};
  for (let key in tech) {
    if (tech[key] != null) {
      listaObjetos = {
        tech: tech[key],
        name: name,
      };
      if (tech[key] === null) {
        return 'Vazio!'
      }
    }
    console.log(listaObjetos);
  }
}
console.log(techList(listaTeste, nameTeste));

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
