// Desafio 10
function techList(techName, name) {
  let objeto = [];
  let lista = {};
  if (techName.length === 0) {
    return 'Vazio!';
  } else {
    for (let key in techName.sort()) {
      lista = {
        tech: techName[key],
        name: name
      };
      objeto.push(lista);
    }
    return objeto;
  }
}
// console.log(techList([], 'Lucas'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let difA = (lineB - lineC)
  let difB = (lineA - lineC)
  let difC = (lineB - lineA)
  if (Math.abs(lineA) > Math.abs(difA)) {
    if (lineA < (lineB + lineC)){
      return true
    }
  } else if (Math.abs(lineB) > Math.abs(difB)) {
    if (lineB < (lineA + lineC)) {
      return true
    }
  } else if (Math.abs(lineC) > Math.abs(difC)) {
    if (lineC < (lineB + lineA)) {
      return true
    }
  }
  return false
}
console.log(triangleCheck(10, 8, 14))
// Desafio 13
function hydrate(hydrate) {
  let regRule = /\d+/g;
  let arrayHydrate = hydrate.match(regRule);
  let quantia = 0;
  let result = ''
  for (let key in arrayHydrate) {
    quantia += parseInt(arrayHydrate[key])
  } if (quantia === 1){
    result = `${quantia} copo de água`;
  } else {
    result = `${quantia} copos de água`
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
