// Desafio 10
//let array10 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
function techList(techPraAprender, name) {
  let arraySaida = [];
  let techList = {};
  techPraAprender.sort();
  for (let key in techPraAprender) {
    techList = {
      tech: techPraAprender[key], 
      name: name};
    arraySaida.push(techList);
  }
  return arraySaida;
}
//console.log(techList(array10, "Lucas"));

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
