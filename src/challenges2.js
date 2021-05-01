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
  let check = false
  if(lineA !== Math.abs(lineA) && lineB !== Math.abs(lineB) && lineC !== Math.abs(lineC)) {
    check = false
  } else if ((lineA < lineB + lineC) && (lineB < lineA +lineC) && (lineC < lineA + lineB)) {
    check = true;
  }
  return check;
}
//console.log (triangleCheck(-3, 3, 3))

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
