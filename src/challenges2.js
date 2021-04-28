// Desafio 10
function techList(array, name) {
  let techs = [];
  let returnTechs = 0;
  let order = array.sort();
  if (order.length !== 0) {
    for (let index = 0; index < order.length; index += 1) {
      techs[index] = {
        tech: order[index],
        name,
      };
    }
    returnTechs = techs;
  } else {
    returnTechs = 'Vazio!';
  }
  return returnTechs;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],
  'Matheus'));

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
