// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function teste1(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  return true;
} 

function teste2(lineA, lineB, lineC) {
  if (lineB > lineC + lineA || lineB < Math.abs(lineC - lineA)) {
    return false;
  }
  return true;
}

function teste3(lineA, lineB, lineC) {
  if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  let a = teste1(lineA, lineB, lineC);
  let b = teste2(lineA, lineB, lineC);
  let c = teste3(lineA, lineB, lineC);
  return a && b && c;
} 

// Desafio 13
function hydrate(bebida) {
  let regex = /\d+/g; 
  let result = bebida.match(regex);
  let sum = 0;

  for (let index = 0; index < result.length; index += 1 ) {
    sum = sum + parseInt(result[index]);
  }

    return sum + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};