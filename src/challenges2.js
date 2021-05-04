// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort();
  let arrayObj = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    let obj = {
      tech: arrayTech[index],
      nome: name,
    };
    arrayObj.push(obj);
  }
  if (arrayTech.length === 5) {
    return arrayObj;
  } else {
    return 'Vazio!';
  }
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
