// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(n) {
  // seu código aqui
  let qtd = 0;
  for (let i = 0; i < n.length; i++){
    
  }
  if (n.length === 11) {
    return '(' + n[0] + n[1] + ') ' + n[2] + n[3] + n[4] + n[5] + n[6] + '-' + n[7] + n[8] + n[9] + n[10];
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return lineA < lineB + lineC && lineC < lineA + lineB && lineB < lineA + lineC 
  && lineA > Math.abs(lineC - lineB) && lineB > Math.abs(lineC - lineA) && lineC > Math.abs(lineB - lineA)
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
