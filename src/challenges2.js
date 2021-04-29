// Desafio 10
function techList(tech, name) {
  let sortArray = tech.sort();
  let arrayTech = [];
  let techs = {}
  if (tech == '') {
    return 'Vazio!';
  } else {
    for (index = 0; index < sortArray.length; index += 1) {
      techs = {
        tech: sortArray[index],
        name: name,
      }
      arrayTech.push(techs);
    }
    return arrayTech;
  }
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
