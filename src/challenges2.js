// Desafio 10
function techList(tech, name) {
  let list = [];

  for (let index in tech){
    let order = tech.sort();
    let object = {
      tech: order[index],
      name: name
    }
    list.push(object);
  }
  if (list.length === 0) {
    return 'Vazio'
  } else {
    return list;
  };
};
console.log(techList(['BioPython', 'BioPerl', 'BioJava', 'BioC++', 'BioRuby'], 'Henrique'));

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
