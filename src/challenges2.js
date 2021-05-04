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
  let testTr1 = Math.abs(lineA);
  let testTr2 = Math.abs(lineB);
  let testTr3 = Math.abs(lineC);
  let haveATringule;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return (haveATringule = true);
  } else {
    return (haveATringule = false);
  }
}
console.log(triangleCheck(10, 14, 8));
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
