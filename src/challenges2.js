// Desafio 10
function techList(tech, name) {
  let objects = [];
  for (let indexTech = 0; indexTech < tech.length; indexTech += 1) {
    objects[indexTech] = {
      tech: tech[indexTech],
      name: name,
    };
  }
  objects.sort();

  return objects;
}

function compare(a,b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
