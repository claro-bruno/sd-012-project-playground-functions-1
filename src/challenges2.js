// Desafio 10
function techList(skills, name) {
  // seu código aqui
  if (skills.lenght === 0){
    return "Vazio!";
  }

  let listSkill = [];

  for (let tecSkills of skills.soft()) {
    let object = {
      tech : tecSkills,
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
