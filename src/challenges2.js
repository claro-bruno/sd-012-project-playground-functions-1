// Desafio 10
function techList(tech, name) {
  let objects = [];
  for (let indexTech = 0; indexTech < tech.length; indexTech += 1) {
    objects[indexTech] = {
      tech: tech[indexTech],
      name: name,
    };
  }
  objects.sort();

  return objects;
}

function compare(a,b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheckLineA(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }

  return false;
}
function triangleCheckLineB(lineA, lineB, lineC) {
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }

  return false;
}
function triangleCheckLineC(lineA, lineB, lineC) {
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }

  return false;
}

function triangleCheckABC(lineA, lineB, lineC) {
  // let checkA;
  // if (triangleCheckLineA(lineA, lineB, lineC) === true) {
  //   checkA = true;
  // }
  // let checkB;
  // if (triangleCheckLineB(lineA, lineB, lineC) === true) {
  //   checkB = true;
  // }
  // let checkC;
  // if (triangleCheckLineC(lineA, lineB, lineC) === true) {
  //   checkC = true;
  // }
  return [checkA, checkB, checkC];
}

function triangleCheck(lineA, lineB, lineC) {
  if (triangleCheckABC(lineA, lineB, lineC) === [true, true, true]) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/[0-9]+/g);
  let counter = 0;
  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
    let indexToNumber = Number(array[indexArray]);
    counter += indexToNumber;
  }
  return counter + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
