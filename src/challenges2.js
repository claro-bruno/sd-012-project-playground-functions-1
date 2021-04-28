// Desafio 10
function techList(arr, name) {

  let result = []
  arr.forEach(element => {
    const obj = {
      tech: element,
      name: name
    };

    result.push(obj);
  });

  return result;
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
