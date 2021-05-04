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

  const lado1 = (lineA, lineB, lineC) => lineA + lineB > lineC && lineB + lineC > lineA && lineA + lineC > lineB;
  const lado2 = (lineA, lineB, lineC) => Math.abs(lineA - lineB) < lineC && Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB; 
  const triangleCheck = (lineA, lineB, lineC) => lado1(lineA, lineB, lineC) && lado2(lineA, lineB, lineC);
}

console.log(triangleCheck())

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
