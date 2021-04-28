// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort()
  let list = [];
  let objects = {
    name: name,
    tech: techSort[0]
  }
  for (index = 1; index < techSort.length; index += 1) {
    objects.name = name;
    objects.tech = techSort[index];
    list.push(objects)
  }
  return list;
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
