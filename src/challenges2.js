// Desafio 10
function techList() {
  // seu código aqui
  if (skills.lenght === 0){
    return "Vazio!";
  }

  let listSkill = [];

  for (key of skills.soft(skills, name)) {
    let object = {
      tech : skills,
      name : name,
    }
  listSkill.push(object);
  }
  return listSkill;
};

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
