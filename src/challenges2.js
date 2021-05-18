// Desafio 10

function techList(techName, name) {
  if (!techName.length) 
  return 'Vazio!';
  let arrayFinal = [];
  for (let i = 0; i < techName.length; i += 1) {
  for (let i in techName.sort()) {
    let pull = {
      tech: techName[i],
      name: name,
    };
    arrayFinal.push(pull);
  }
  return arrayFinal;
}
}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
      return false;
    }
    if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
      return false;
    }
    if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) || lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) || lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
      return true;
    }
  }

// Desafio 13

  function hydrate(drink) {
    // seu código aqui
    let consumo = drink.match(/\d+/g).map(Number);
    let total = 0;
  
    for (let index = 0; index < consumo.length; index += 1) {
      total = consumo[index] + total;
    }
    if (total > 1) {
      return total + ' copos de água';
    }
    return total + ' copo de água';
  }
  

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
