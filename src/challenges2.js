// Desafio 10
function techList(arrayTech, name) {
  let arrayObjects = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayTech.length; index += 1) {
      arrayObjects[index] = {
        tech: arrayTech[index],
        name: name
      }
    }
    return arrayObjects.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
  }
}
// console.table(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
// console.log(techList([], "Lucas"));

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
