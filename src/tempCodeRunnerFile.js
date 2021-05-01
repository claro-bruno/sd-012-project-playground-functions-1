function techList(tech, name) {
  let createTech = [];
  let nameTech = [];
  if (tech === 0){
    return "Vazio!";
  } else {
    createTech = [];
    for (let key in tech){
      nameTech = {
        name = name;
        tech = [key]tech;
      }
      createList.push(createTech);
    }
  }
  return createList;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]));