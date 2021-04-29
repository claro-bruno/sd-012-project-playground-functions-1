// Desafio 10
function techList(tech, nome) {
  let sortArray = tech.sort();
  let arrayTech = [];
  let techs = {};
  let resultado = arrayTech;
  if (tech.length === 0) {
    resultado = 'Vazio!';
  } else {
    for (let index = 0; index < sortArray.length; index += 1) {
      techs = {
        tech: sortArray[index],
        name: nome,
      };
      arrayTech.push(techs);
    }
  }
  return resultado;
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
