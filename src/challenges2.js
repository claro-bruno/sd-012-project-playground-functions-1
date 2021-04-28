// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort()
  let list = [];
  for (index = 0; index < techSort.length; index += 1) {
    let objects = {
      name: name,
      tech: ''
    }
    objects.name = name;
    objects.tech = techSort[index];
    list.push(objects)
  }
  if (list.length === 0){
    return "Vazio!"
  } else {
  return list;
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
