// Desafio 10
function techList(theTech, theName) {
  let objectlist = [];
  for (let index = 0; index < theTech.length; index += 1) {
    let object = {
      tech: '',
      name: theName,
    };
    object.tech = theTech[index];
    objectlist.push(object);
  }
  return (objectlist);
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
