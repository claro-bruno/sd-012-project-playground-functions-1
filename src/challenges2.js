// Desafio 10
function techList() {
  // seu código aqui
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
  return check
}
console.log (triangleCheck(3, 3, 3))

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
