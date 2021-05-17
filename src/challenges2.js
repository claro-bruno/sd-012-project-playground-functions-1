// Desafio 10
function techList(tech, nome) {
  // seu código aqui
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
};

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}
// Desafio 12
function firstCheck(lineA, lineB, lineC) {
  if (lineA <= lineB + lineC && lineB <= lineA + lineC && lineC <= lineA + lineB) return true;
}
function a(lineB, lineC) {
  return Math.abs(lineB - lineC);
}
function b(lineA, lineC) {
  return Math.abs(lineA - lineC);
}
function c(lineA, lineB) {
  return Math.abs(lineA - lineB);
}
function secondCheck(lineA, lineB, lineC) {
  if (lineA >= a(lineB, lineC) && lineB >= b(lineA, lineC) && lineC >= c(lineA, lineB)) return true;
}
function triangleCheck(lineA, lineB, lineC) {
  if (firstCheck(lineA, lineB, lineC) && secondCheck(lineA, lineB, lineC)) {
    return true;
  }
  return false;
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
