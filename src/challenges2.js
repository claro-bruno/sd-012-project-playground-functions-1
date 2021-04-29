// Desafio 10
function techList(arrayTec, name) {
  if (arrayTec.length === 0) return 'Vazio!';
  arrayTec.sort();
  let object;
  let newList = [];
  for (let i = 0; i < arrayTec.length; i += 1) {
    object = {};
    object.tech = arrayTec[i];
    object.name = name;
    newList.push(object);
  }
  return newList;
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
