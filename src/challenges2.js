// Desafio 10
function techList(tech, nome) {
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
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    let checklineA = lineA < (lineB+lineC) && lineA > Math.abs(lineB - lineC) ?  true: false;
    let checklineB = lineA < (lineB+lineC) && lineA > Math.abs(lineA - lineC) ?  true: false;
    let checklineC = lineA < (lineB+lineC) && lineA > Math.abs(lineA - lineB) ?  true: false;

    return checklineA === true || checklineB === true || checklineC === true ? true: false;
}

// Desafio 13
function hydrate(stringRecebida) {
  let ct = 0;
  let patt1 = /[1-9]/g;
  let result = stringRecebida.match(patt1);
  for (let indexSecond = 0; indexSecond < result.length; indexSecond += 1) {
    ct += Number(result[indexSecond]);
  }

  return ct === 1 ? `${ct} copo de água` : ct > 0 && ct > 1 && `${ct} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
