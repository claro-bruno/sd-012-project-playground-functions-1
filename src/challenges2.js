// Desafio 10
function techList(nomeTech, name) {
 // seu código aqui
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Martin'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = Math.abs(lineA + lineB);
  let sumAC = Math.abs(lineA + lineC);
  let sumCB = Math.abs(lineC + lineB);
  let boolean = false;
  if (lineA < sumCB && lineB < sumAC && lineC < sumAB) {
    boolean = true
    return boolean;
  }
  return boolean;
}
console.log(triangleCheck(10, 14, 8))

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
