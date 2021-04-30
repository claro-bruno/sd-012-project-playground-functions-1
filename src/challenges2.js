// Desafio 10
function techList(tech, name) {
  let techObject = {};
  let techObjectList = [];
  for(let nameTech of tech.sort()) {
    techObject["tech"] = nameTech;
    techObject["name"] = name;
    techObjectList.push(techObject);  
  }
  return techObjectList;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'John'));

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
