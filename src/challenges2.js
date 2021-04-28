// Desafio 10
function techList(tech, name) {
  let list = [];
  for (let index in tech) {
    let object = {
      tech: tech[index],
      name: name
    }
    list.push(object);
  }
  if (list = []) {
    return "Vazio!"
  } else {
    return list.sort(function(a, b) {
      if (a.tech.toLowerCase() < b.tech.toLowerCase()) return -1;
      else if (a.name.toLowerCase() > a.name.toLowerCase()) return 1;
      return 0;
    });
  }
}

console.log(techList([], 'Renan'));

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
