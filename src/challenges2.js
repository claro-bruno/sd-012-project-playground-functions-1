// Desafio 10
function techList(theTech, theName) {
  let objectList = [];
  let odTheTech = theTech.sort();
  if (theTech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < odTheTech.length; index += 1) {
    let object = {
      tech: '',
      name: theName,
    };
    object.tech = odTheTech[index];
    objectList.push(object);
  }
  return (objectList);
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
