// Desafio 10
function techList(arrayTech, nameOf) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } else {
  let arrayTechSorted = arrayTech.sort();
  let newArray = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    let obj = {
      tech: '',
      name: ''
    }
    obj.tech = arrayTechSorted[index];
    obj.name = nameOf;
    newArray.push(obj);
  }
    return newArray;
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
