// Desafio 10
function techList(tech, name) {
  // seu código aqui
  for (let index = 0; index <= tech.lenght; index += 1) {
    if (tech[index] === undefined) (
      
    );
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let check = false;
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB) - Math.abs(lineC))) {
    check = true;
  } else if (lineB < (lineA + lineC) && lineB > (Math.abs(lineA) - Math.abs(lineC))) {
    check = true;
  } else if (lineC < (lineA + lineB) && lineB > (Math.abs(lineA) - Math.abs(lineB))) {
    check = true;
  } else {
    check = false;
  };
  return check;
};
console.log (triangleCheck(10, 14, 8))

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
