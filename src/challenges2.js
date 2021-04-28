// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects = [];
  arrayTech = arrayTech.sort();

  for (let index in arrayTech) {
     let info = {
      tech: arrayTech[index],
      name: name
    }
    arrayObjects.push(info);
  }
  
  if (arrayTech.length === 0) {
    arrayObjects = "Vazio!";
  }

  return arrayObjects;
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
