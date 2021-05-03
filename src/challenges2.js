// Desafio 10
function techList(arrayTech, name) {
  let output = [];
  let arraySort = arrayTech.sort();
  if (arrayTech === 0) {
    output.push('Vazio!')
  }
  for ( let key of arraySort) {
    let objOutput = {
      tech: key,
      name: name,
    };
    output.push(objOutput);
  }
  return output;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Elias'));
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
