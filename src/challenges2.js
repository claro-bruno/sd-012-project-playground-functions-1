// Desafio 10
function techList(arr, name) {
  arr.sort();
  let finalList = [];

  for (let index = 0; index < arr.length; index += 1) {
    let objeto = {
      tech: arr[index],
      name: name
    }
    finalList.push(objeto);
  }
  if (arr.length == 0) {
    return 'Vazio!'
  } else {
    return finalList;
  };
};
console.log(techList([], "Lucas"));

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
