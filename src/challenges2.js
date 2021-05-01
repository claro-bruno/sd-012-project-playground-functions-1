// Desafio 10
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
