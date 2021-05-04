// Desafio 10
function techList(projectTech, name) {
  if (projectTech.length === 0){
    return"Vazio!";
  } else {
    let array = [];
    for (let index = 0; index < projectTech.length; index += 1){
      let object = {
        tech = '',
        name = ''
    }
    object.tech = projectTech[index];
    object.name = name;
    array.push(object);
  }
  return array;
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
