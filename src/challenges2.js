// Desafio 10
function techList(theTech, theName) {
  theTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
  theName = 'Lucas';
  let objectList = [];
  if (theTech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < theTech.length; index += 1) {
    let object = {
      tech: '',
      name: theName,
    };
    object.tech = theTech[index];
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
