// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let alfabetica = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!'
  } else {
    for (let language in alfabetica){
      array.push ({
        tech: alfabetica[language],
        name: name
      });
    };
    return array;
  }; 
};

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
