// Desafio 10
function techList(tech, name) {
  let error = 'Vazio!';
  if (tech.length !== 0) {
    tech = tech.sort();
  } else {
    return error;
  }
  let array = [];
  for (let indice = 0; indice < tech.length; indice += 1) {
    let obj = {};
    obj.tech = tech[indice];
    obj.name = name;
    array.push(obj);
  }
  let orden = array;
  return orden;
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
