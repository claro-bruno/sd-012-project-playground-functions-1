// Desafio 10

function techList(array, nome) {
  let objList = [];
  array.sort();
  if (array.length === 0) {
    objList = 'Vazio!';
  } else {
    for(let index = 0; index < array.length; index += 1) {
      let novoItem = {
        tech: array[index],
        name: nome
      };
      objList.push(novoItem);
    };
  }
  return objList;
};

console.log(techList([], "Pedro"));


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
