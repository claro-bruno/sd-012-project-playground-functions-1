// Desafio 10
function techList(tech, nome) {
  let sortArray = tech.sort();
  let arrayTech = [];
  let techs = {};
  if (tech === '') {
    return 'Vazio!';
  }
  for (let index = 0; index < sortArray.length; index += 1) {
    techs = {
      tech: sortArray[index],
      name: nome,
    };
    arrayTech.push(techs);
  }
  return arrayTech;
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
