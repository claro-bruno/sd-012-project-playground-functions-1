// Desafio 10
function techList(nomeTech, name) {
let code = []; 
nomeTech.sort();

  if (nomeTech.length > 4) {
    for (let index in nomeTech){
    code.push ({ tech: nomeTech[index],
    name: name});
    }
      return code;
  } else {
      return ('Vazio!');
  }
}

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

// Desafio 13
function hydrate(bebida) {
 // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};