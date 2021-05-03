// Desafio 10
function techList(skills, name) {
  // seu código aqui
  let listSkill = [];
  if (skills.lenght === 0){
    return "Vazio!";
  }

  for (let tecSkills of skills.soft()) {
    listSkills.push({
      tech : tecSkills,
      name : name,
    })
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
