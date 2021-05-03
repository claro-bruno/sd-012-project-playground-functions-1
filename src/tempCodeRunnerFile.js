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