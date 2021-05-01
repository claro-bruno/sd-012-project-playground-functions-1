// Desafio 10
function techList(tech, name) {
  // seu código aqui
  for (let index = 0; index <= tech.lenght; index += 1) {
    if (tech[index] === undefined) (
      
  };
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)
  || lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
  return false;
}

return true;
};
  console.log (triangleCheck(-3, 14, 8))


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
