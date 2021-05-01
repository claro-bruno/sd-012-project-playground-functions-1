// Desafio 10
function techList(tech, nome) {
  let objTech = [];
  if (tech.length > 0) {
    tech.sort();
    for (let key of tech) {
      objTech.push({
        tech: key,
        name: nome,
      });
    }
  }
  return objTech.length > 0 ? objTech : 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checklineA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) ? true : false;
  let checklineB = lineA < (lineB + lineC) && lineA > Math.abs(lineA - lineC) ? true : false;
  let checklineC = lineA < (lineB + lineC) && lineA > Math.abs(lineA - lineB) ?  true : false;
  return checklineA === true || checklineB === true || checklineC === true ? true : false;
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
