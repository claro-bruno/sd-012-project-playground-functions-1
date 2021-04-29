// Desafio 10
function techList(array, name) {
    if (array.length === 0) {
        return 'Vazio!'
    } else {
        array.sort();
          let respArray = [];
          for (let objeto in array) {
              respArray[objeto] = {tech: array[objeto], name: name} 
          };
          return respArray;
    };
};

// Saída:))

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
