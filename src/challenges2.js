// Desafio 10
function techList(tecnologia, name) {
  // seu código aqui
  if (tecnologia.length === 0) {
    return 'Vazio!';
  }

  let sortList = tecnologia.sort();
  let outputObject = [];

  for(let index = 0; index < sortList.length; index += 1 ) {
    let object = {
      tech: sortList[index],
      name: name,
    };
    outputObject.push(object);
  }
  return outputObject;
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
