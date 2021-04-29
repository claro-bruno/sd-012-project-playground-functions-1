// Desafio 10
function techList(techName, name) {
  let objeto = [];
  let lista = {};
    if (techName.length === 0) {
    return 'Vazio!';
  } else {
    for (let key in techName.sort()) {
      lista = {
        tech: techName[key],
        name: name
      };
      objeto.push(lista);
    }
    return objeto;
  }
}
// console.log(techList([], 'Lucas'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {


}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
