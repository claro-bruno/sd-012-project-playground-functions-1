// Desafio 10
function techList(techNames, name) {
  let listObject = [];
  if(techNames.length === 0){
    return 'Vazio!';
  }
  for(let index = 0; index < techNames.length; index += 1) {
    listObject.push({ tech: techNames[index], name: name });
  }
  return listObject;
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
