// Desafio 10
function techList(tech, name) {
  let exit = [];
  let exit2 = 'Vazio!';
  tech.sort();
  if (tech.length !== 0) {
    for(let key in tech){
      let newObject = {
        tech: tech[key],
        name: name,
      };
      exit.push(newObject);
    }
  }
  else {
    exit = exit2;
  }
  return exit;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
